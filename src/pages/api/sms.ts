import * as twilioLib from 'twilio';

import { getRelevantDates } from '@/utils/helpers';
import { firebaseAdmin } from '@/utils/firebaseAdmin';
import {
  MONTHS_FULL_NAME,
  USERS_COLLECTION,
  USER_ENTRIES_COLLECTION,
} from '@/utils/constants';
import { TEXT_TRIGGERS, handleTriggerText } from '@/api/textTriggers';
import { user } from 'firebase-functions/v1/auth';
import { IUser } from '@/interfaces/user';

const USERS_REF = firebaseAdmin.firestore().collection(USERS_COLLECTION);

const GENERIC_RESPONSE_MESSAGE =
  'Hey, this is Text Reflect! 📱🔮 \n' +
  "We're not ready for general use yet, but checkout https://jackobrien.xyz for updates! (or text Jack)";

const sendTextResponse = (response: any, message: string) => {
  const twiml = new twilioLib.twiml.MessagingResponse();
  twiml.message(message);

  response.writeHead(200, { 'Content-Type': 'text/xml' });
  response.end(twiml.toString());
};

export default async (request: any, response: any) => {
  const from = request.body.From;
  const message = request.body.Body;
  const { today, yesterday } = getRelevantDates('America/Los_Angeles');

  console.info(`Message ${message} from ${from}, ${today.string}`);

  const userData = await USERS_REF.where('phoneNumber', '==', from)
    .limit(1)
    .get();

  if (userData.empty) {
    console.info(`User for this number not found.`);
    sendTextResponse(response, GENERIC_RESPONSE_MESSAGE);
    return;
  }
  const user: IUser = {
    id: userData.docs[0].id,
    ...(userData.docs[0].data() as any),
  };

  console.info(`Message is from existing user ${user.name} - ${user.id}.`);

  // Handle triggers

  if (TEXT_TRIGGERS.includes(message.trim().toUpperCase())) {
    const replyMessage = await handleTriggerText(
      message.trim().toUpperCase(),
      user,
      from,
    );
    sendTextResponse(response, replyMessage);
    return;
  }

  // Not a Trigger, we're saving the user message!

  // TODO:
  // if current date is the last date, do nothing here
  // if the current date is 1 day apart from the last date, increment the current streak
  // if the current date is more than 1 day apart from the last date, reset the current streak to 1

  await USERS_REF.doc(user.id).collection(USER_ENTRIES_COLLECTION).add({
    method: 'text',
    time: firebaseAdmin.firestore.Timestamp.now(),
    timestamp: new Date().getTime(),
    value: message,
  });

  let streak = 1;

  // streak is dead because last message is more than a day away (not yesterday or today)
  if (
    user.lastMessage !== yesterday.string &&
    user.lastMessage !== today.string
  ) {
    await USERS_REF.doc(user.id).update({
      currentStreak: 1,
      lastMessage: today.string,
    });
  }

  // streak is alive!
  if (user.lastMessage === yesterday.string) {
    streak = user.currentStreak + 1;
    await USERS_REF.doc(user.id).update({
      currentStreak: streak,
      longestStreak: Math.max(streak, user.longestStreak),
      lastMessage: today.string,
    });
  }

  if (user.sendCompletionResponse && user.lastMessage !== today.string) {
    sendTextResponse(
      response,
      `Nice, ${user.name}! Recorded your entry for today, ${
        MONTHS_FULL_NAME[today.month]
      } ${today.date}.`,
    );
  }
};
