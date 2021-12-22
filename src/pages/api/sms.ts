import { getRelevantDates } from '@/utils/helpers';

import * as twilioLib from 'twilio';

export default async (request: any, response: any) => {
  const from = request.body.From;
  const message = request.body.Body;
  const { currentYear, currentMonth, currentDate } = getRelevantDates(
    'America/Los_Angeles',
  );

  console.info(
    `Message ${message} from ${from}, ${currentYear}-${currentMonth}-${currentDate}`,
  );

  // New user, send them a link to the website
  const twiml = new twilioLib.twiml.MessagingResponse();
  twiml.message(
    'Hey, this is Text Reflect! 📱🔮 \n' +
      "We're not ready yet, but checkout https://jackobrien.xyz for updates!",
  );

  response.writeHead(200, { 'Content-Type': 'text/xml' });
  response.end(twiml.toString());
};
