import * as functions from 'firebase-functions';
import * as twilioLib from 'twilio';
import { FUNCTION_TEXT_REFLECT_PHONE_NUMBER } from './constants';
import { USERS_REF } from './firebaseAdmin';
import { generateMessageForUser } from './messageUtils';

export const newUserCreated = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snap, context) => {
    const userId = context.params.userId;

    functions.logger.info(`New user created: ${userId}`);

    USERS_REF.doc(userId)
      .update({
        unknownUser: true,
      })
      .then((result) => {
        return null;
      })
      .catch((e) => {
        console.warn(e);
        return null;
      });
  });

// Get active users with reminders enabled
const getAllUsersForReminder = async (): Promise<any[]> => {
  const usersQuery = await USERS_REF.where('sendReminders', '==', true)
    .where('active', '==', true)
    .get();

  return usersQuery.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Runs every day at 8:03 pm EST
export const sendReminders = functions.pubsub
  .schedule('3 20 * * *')
  .timeZone('America/New_York')
  .onRun(async (context) => {
    functions.logger.info(`Running at 8:03 pm EST`);
    let remindersSent = 0;

    const client = new twilioLib.Twilio(
      functions.config().twilio.accountid,
      functions.config().twilio.authtoken,
    );

    const users = await getAllUsersForReminder();

    for (const user of users) {
      functions.logger.info(`Sending message to ${user.name}.`);
      const message = await generateMessageForUser(user);
      client.messages
        .create({
          body: message,
          to: user.phoneNumber,
          from: FUNCTION_TEXT_REFLECT_PHONE_NUMBER, // From a valid Twilio number, for now all the same
        })
        .then((message) => console.info(message.sid));
      remindersSent++;
    }

    functions.logger.info(`Send ${remindersSent} reminders to reflectors.`);
  });
