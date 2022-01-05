import * as twilioLib from 'twilio';
import { firebaseAdmin } from '@/utils/firebaseAdmin';
import { TEXT_REFLECT_PHONE_NUMBER } from '@/utils/constants';

const USERS_REF = firebaseAdmin.firestore().collection('users');

const TWILIO_ACCOUNT_ID = process.env.TWILIO_ACCOUNT_ID || '';
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || '';
const client = new twilioLib.Twilio(TWILIO_ACCOUNT_ID, TWILIO_AUTH_TOKEN);

// const CHALLENGER_VCARD_URL = 'https://www.vcard.link/card/DDzO.vcf';

// const MESSAGE =

const getAllUsers = async (): Promise<any[]> => {
  const users = await USERS_REF.get();

  return users.docs.map((doc) => doc.data() as any);
};

const sendMessage = (body: string, number: string): void => {
  client.messages
    .create({
      body,
      to: number,
      from: TEXT_REFLECT_PHONE_NUMBER,
    })
    .then((message) => console.info(message.sid));
};

export default async (request: any, response: any) => {
  const { sendToAll, number } = request.body;

  const messageBody =
    'Heyo, time to reflect on your day 🔮. Reply with what happened! (OFF to end these texts).';

  //   const messageBody =
  //     'Welcome to Text Reflect Beta 📱🔮 !' +
  //     '\n\n' +
  //     "You'll get daily reminders from me to write about your day." +
  //     '\n\n' +
  //     'Never forget an experience! Record it, reflect, and extend your useful memory!' +
  //     '\n\n' +
  //     'Respond to this text for your first entry (Jan 1). Write as much or as little feels relevant about your day. Visualization and review of past messages coming soon...' +
  //     '\n\n' +
  //     'Add me to your contacts now for a great 2021! 🕺🚀';

  //   const messageBody =
  //     '🚨🗓️ End of April Alert 🗓️🚨' +
  //     '\n\n' +
  //     "It's the last day of April, finish strong! It's also time to think about your May goals." +
  //     '\n\n' +
  //     'Continue on your April goal, or pick something new. We recommend choosing something that:' +
  //     '\n - Can be done in <10 minutes (consistency = key)' +
  //     '\n - Builds towards a larger goal (purpose)' +
  //     '\n - Will be able to do everyday (possible!)' +
  //     '\n\nCreate your challenge now👇 http://calendarchallenger.com/create';

  let count = 0;
  if (sendToAll) {
    console.log('Get all users and send');
    const users = await getAllUsers();

    // eslint-disable-next-line no-restricted-syntax
    for (const user of users) {
      if (user.phoneNumber) {
        sendMessage(messageBody, user.phoneNumber);
        console.log(`Sent message to ${user.name} at ${user.phoneNumber}`);
        count += 1;
      }
    }
  } else {
    if (number) {
      sendMessage(messageBody, number);
      console.log(`Sending to ${number}`);
    } else {
      sendMessage(messageBody, process.env.JACK_PHONE_NUMBER || '');
      console.log(`Sending to Jack`);
    }
    count += 1;
  }

  response.writeHead(200, { 'Content-Type': 'text/xml' });
  response.end(`Sent ${count} messages`);
};
