import { IUser } from '@/interfaces/user';
import { USERS_COLLECTION } from '@/utils/constants';
import { firebaseAdmin } from '@/utils/firebaseAdmin';
import { sendMessage } from '@/utils/messaging';

const TRIGGER_MESSAGE =
  'Heyo, time to reflect on your day. Reply with what happened! (Reply STOP to end these)';

const TRIGGER_TEXT = 'TRIGGER';

const STOP_TEXT = 'OFF';
const START_TEXT = 'START';

const YES_REPLY_TEXT = 'YESREPLY';
const NO_REPLY_TEXT = 'NOREPLY';

const HELP_TEXT = 'HELP';

export const TEXT_TRIGGERS = [
  TRIGGER_TEXT,
  STOP_TEXT,
  START_TEXT,
  YES_REPLY_TEXT,
  NO_REPLY_TEXT,
  HELP_TEXT,
];

const USERS_REF = firebaseAdmin.firestore().collection(USERS_COLLECTION);

const getAllUsers = async (): Promise<IUser[]> => {
  const users = await USERS_REF.get();

  return users.docs.map((doc) => ({ id: doc.id, ...doc.data() } as IUser));
};

export const handleTriggerText = async (
  message: string,
  user: any,
  from: string,
): Promise<string> => {
  if (message === STOP_TEXT) {
    await USERS_REF.doc(user.id).update({
      sendReminders: false,
    });
    return `Thanks, ${
      user.data().name
    }. You'll stop getting texts from us unless you send back START.`;
  }

  if (message === START_TEXT) {
    await USERS_REF.doc(user.id).update({
      sendReminders: true,
    });

    return `Thanks, ${
      user.data().name
    }! We'll start sending you messages again.`;
  }

  if (message === NO_REPLY_TEXT) {
    await USERS_REF.doc(user.id).update({
      sendCompletionResponse: false,
    });
    return `Thanks, ${
      user.data().name
    }. You'll stop getting replies after you send in your messages unless you text back YESREPLY.`;
  }

  if (message === YES_REPLY_TEXT) {
    await USERS_REF.doc(user.id).update({
      sendCompletionResponse: true,
    });
    return `Thanks, ${
      user.data().name
    }! We'll start sending you reply messages again.`;
  }

  if (message === TRIGGER_TEXT && from === process.env.JACK_PHONE_NUMBER) {
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

    return `Trigger sent to ${count} numbers, thanks Jack.`;
  }

  if (message === HELP_TEXT) {
    return (
      'Welcome to Text Reflect Beta 📱🔮 !' +
      '\n\n' +
      "We'll send you daily reminders from this number to write about your day." +
      '\n\n' +
      'Never forget an experience! Record it, reflect, and extend your memory!' +
      '\n\n' +
      "For the best experience, reply everyday. If you ever miss 5 days in a row, we'll stop sending you reminders." +
      '\n\n' +
      'Special commands:\n' +
      '-----------------\n' +
      'OFF - stop getting reminders from us\n' +
      'START - start getting reminders from us\n' +
      'NOREPLY - stop getting replies from us (after you send a text)\n' +
      'YESREPLY - start getting replies from us\n' +
      '\n\n'
    );
  }

  return 'Thanks!';
};
