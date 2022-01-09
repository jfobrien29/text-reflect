import { VERCEL_APP_URL } from '@/utils/constants';
import * as twilioLib from 'twilio';

export default async (request: any, response: any) => {
  const voiceResponse = new twilioLib.twiml.VoiceResponse();

  voiceResponse.say('Hey-yo! You have reached the Text Reflector!');
  voiceResponse.pause();

  voiceResponse.say(
    'For information on how to use Text Reflector, text this number the word HELP. "H" "E" "L" "P".',
  );
  voiceResponse.pause();

  voiceResponse.say(
    'After the beep, you will have 30 seconds to provide feedback. Press 1 to finish your recording.',
  );
  voiceResponse.record({
    action: `${VERCEL_APP_URL}/api/voiceRecord`,
    timeout: 5,
    maxLength: 30,
    transcribe: false,
    playBeep: true,
    trim: 'trim-silence',
  });

  response.writeHead(200, { 'Content-Type': 'text/xml' });
  response.end(voiceResponse.toString());
};
