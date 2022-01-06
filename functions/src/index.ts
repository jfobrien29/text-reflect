import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

// const USERS_REF = admin.firestore().collection('users');

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const newUserCreated = functions.firestore
  .document('users/{userId}')
  .onCreate(async (snap, context) => {
    const userId = context.params.userId;

    functions.logger.info(`Unknown user created: ${userId}`);
  });

// Runs every day at 12:01 am PST
export const markMissedTasks = functions.pubsub
  .schedule('2 0-6 * * *')
  .timeZone('America/New_York')
  .onRun(async (context) => {
    functions.logger.info(`Updated challenge days as being missed in tz .`);
  });
