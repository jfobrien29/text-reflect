import * as twilioLib from 'twilio';

import { getRelevantDates } from '@/utils/helpers';
import { firebaseAdmin } from '@/utils/firebaseAdmin';
import {
  MONTHS_FULL_NAME,
  USERS_COLLECTION,
  USER_ENTRIES_COLLECTION,
} from '@/utils/constants';
import { sendMessage } from '@/utils/messaging';

const USERS_REF = firebaseAdmin.firestore().collection(USERS_COLLECTION);

const GENERIC_RESPONSE_MESSAGE =
  'Hey, this is Text Reflect! 📱🔮 \n' +
  "We're not ready for general use yet, but checkout https://jackobrien.xyz for updates!";

const TRIGGER_MESSAGE =
  'Heyo, time to reflect on your day. Reply with what happened! (Reply STOP to end these)';

const TRIGGER_TEXT = 'TRIGGER';
const STOP_TEXT = 'OFF';
const START_TEXT = 'START';
const YES_REPLY_TEXT = 'YESREPLY';
const NO_REPLY_TEXT = 'NOREPLY';

const getAllUsers = async (): Promise<any[]> => {
  const users = await USERS_REF.get();

  return users.docs.map((doc) => doc.data() as any);
};

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

  // Handle the specific triggers (START, STOP, TRIGGER)

  if (message.trim() === STOP_TEXT) {
    await USERS_REF.doc(user.id).update({
      sendReminders: false,
    });
    sendTextResponse(
      response,
      `Thanks, ${
        user.data().name
      }. You'll stop getting texts from us unless you send back START.`,
    );
    return;
  }

  if (message.trim() === START_TEXT) {
    await USERS_REF.doc(user.id).update({
      sendReminders: true,
    });
    sendTextResponse(
      response,
      `Thanks, ${user.data().name}! We'll start sending you messages again.`,
    );
    return;
  }

  if (
    message.trim() === TRIGGER_TEXT &&
    from === process.env.JACK_PHONE_NUMBER
  ) {
    console.log('TRIGGER!!');
    let count = 0;
    const users = await getAllUsers();

    const sendMessagePromises = users.map(
      async (thisUser: any): Promise<void> => {
        if (!thisUser.sendReminders) {
          return Promise.resolve();
        }

        console.log(
          `Sent message to ${thisUser.name} at ${thisUser.phoneNumber}`,
        );
        count += 1;
        return sendMessage(TRIGGER_MESSAGE, thisUser.phoneNumber);
      },
    );

    if (message.trim() === NO_REPLY_TEXT) {
      await USERS_REF.doc(user.id).update({
        sendCompletionResponse: false,
      });
      sendTextResponse(
        response,
        `Thanks, ${
          user.data().name
        }. You'll stop getting replies after you send in your messages unless you text back YESREPLY.`,
      );
      return;
    }

    if (message.trim() === YES_REPLY_TEXT) {
      await USERS_REF.doc(user.id).update({
        sendCompletionResponse: true,
      });
      sendTextResponse(
        response,
        `Thanks, ${
          user.data().name
        }! We'll start sending you reply messages again.`,
      );
      return;
    }

    await Promise.all(sendMessagePromises);

    sendTextResponse(
      response,
      `Trigger sent to ${count} numbers, thanks Jack.`,
    );
    return;
  }

  // We're saving the user message!

  // const lastMessageDate = 1/2/2022
  // const currentStreak = 3

  // if current date is the last date, do nothing here
  // if the current date is 1 day apart from the last date, increment the current streak
  // if the current date is more than 1 day apart from the last date, reset the current streak to 1

  await USERS_REF.doc(user.id).collection(USER_ENTRIES_COLLECTION).add({
    method: 'text',
    time: firebaseAdmin.firestore.Timestamp.now(),
    timestamp: new Date().getTime(),
    value: message,
  });

  // if user has already sent a message today, don't send another

  if (user.data().sendCompletionResponse) {
    sendTextResponse(
      response,
      `Nice, ${user.data().name}! Recorded your entry for today, ${
        MONTHS_FULL_NAME[currentMonth]
      } ${currentDate}.`,
    );
  }
};
