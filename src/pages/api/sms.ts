import * as twilioLib from 'twilio';

import { getRelevantDates } from '@/utils/helpers';
import { firebaseAdmin } from '@/utils/firebaseAdmin';
import {
  MONTHS_FULL_NAME,
  USERS_COLLECTION,
  USER_ENTRIES_COLLECTION,
} from '@/utils/constants';
import { TEXT_TRIGGERS, handleTriggerText } from '@/api/textTriggers';

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
  const { currentYear, currentMonth, currentDate } = getRelevantDates(
    'America/Los_Angeles',
  );

  console.info(
    `Message ${message} from ${from}, ${currentYear}-${
      currentMonth + 1
    }-${currentDate}`,
  );

  const userData = await USERS_REF.where('phoneNumber', '==', from)
    .limit(1)
    .get();

  if (userData.empty) {
    console.info(`User for this number not found.`);
    sendTextResponse(response, GENERIC_RESPONSE_MESSAGE);
    return;
  }
  const user = userData.docs[0];

  console.info(
    `Message is from existing user ${user.data().name} - ${user.id}.`,
  );

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

  // TODO: if user has already sent a message today, don't send another one

  if (user.data().sendCompletionResponse) {
    sendTextResponse(
      response,
      `Nice, ${user.data().name}! Recorded your entry for today, ${
        MONTHS_FULL_NAME[currentMonth]
      } ${currentDate}.`,
    );
  }
};
