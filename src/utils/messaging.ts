import * as twilioLib from 'twilio';
import { TEXT_REFLECT_PHONE_NUMBER } from './constants';

const TWILIO_ACCOUNT_ID = process.env.TWILIO_ACCOUNT_ID || '';
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || '';
const client = new twilioLib.Twilio(TWILIO_ACCOUNT_ID, TWILIO_AUTH_TOKEN);

export const sendMessage = (body: string, number: string): void => {
  client.messages
    .create({
      body,
      to: number,
      from: TEXT_REFLECT_PHONE_NUMBER,
    })
    .then((message) => console.info(message.sid))
    .catch((error) => console.error(error));
};
