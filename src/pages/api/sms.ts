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

  if (message === STOP_TEXT) {
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

  if (message === START_TEXT) {
    await USERS_REF.doc(user.id).update({
      sendReminders: true,
    });
    sendTextResponse(
      response,
      `Thanks, ${user.data().name}! We'll start sending you messages again.`,
    );
    return;
  }

  if (message === TRIGGER_TEXT && from === '+17037406546') {
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

    await Promise.all(sendMessagePromises);

    sendTextResponse(
      response,
      `Trigger sent to ${count} numbers, thanks Jack.`,
    );
    return;
  }

  await USERS_REF.doc(user.id).collection(USER_ENTRIES_COLLECTION).add({
    method: 'text',
    time: firebaseAdmin.firestore.Timestamp.now(),
    timestamp: new Date().getTime(),
    value: message,
  });

  sendTextResponse(
    response,
    `Nice, ${user.data().name}! Recorded your entry for today, ${
      MONTHS_FULL_NAME[currentMonth]
    } ${currentDate}.`,
  );
};
