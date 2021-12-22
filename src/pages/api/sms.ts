import { getRelevantDates } from '@/utils/helpers';
import { NowRequest, NowResponse } from '@vercel/node';

import * as twilioLib from 'twilio';

const SUCCESS_CHEERS: string[] = ['LFG!', 'Yeah baby!', 'Keep Groovin!'];

const randomCheers = (): string => {
  const randomIndex = Math.floor(Math.random() * SUCCESS_CHEERS.length);
  return SUCCESS_CHEERS[randomIndex];
};

const createSuccessMessage = (streak: number): string => {
  if (streak == 0) {
    return '';
  } else if (streak == 1) {
    return randomCheers();
  } else if (streak > 1) {
    let streakFire = '🔥';
    if (streak > 4 && streak <= 9) {
      streakFire = '🔥🔥';
    } else if (streak > 9 && streak <= 14) {
      streakFire = '🔥🔥🔥';
    } else if (streak > 14 && streak <= 19) {
      streakFire = '🔥🔥🔥🔥';
    } else if (streak > 19 && streak <= 24) {
      streakFire = '🔥🔥🔥🔥🔥';
    } else if (streak > 24) {
      streakFire = '💥🔥🔥🔥🔥🔥💥';
    }
    return `You're on a ${streak} day streak!${streakFire}`;
  }

  return '';
};

export default async (request: NowRequest, response: NowResponse) => {
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
