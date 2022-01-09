import * as twilioLib from 'twilio';

export default async (request: any, response: any) => {
  const voiceResponse = new twilioLib.twiml.VoiceResponse();

  voiceResponse.say(
    'Hey-yo! You have reached the Text Reflector. If you have not recorded your day, do it now!',
  );
  voiceResponse.pause();

  voiceResponse.say(
    'For information on how to use Text Reflector, text this number HELP.',
  );
  voiceResponse.pause();

  voiceResponse.say('Stay on the line now to provide application feedback.');
  voiceResponse.pause();

  voiceResponse.say(
    'After the beep, you will have 30 seconds to provide feedback. Press any key to finish.',
  );
  voiceResponse.record({
    action: 'https://calendarchallenger.com/api/voicerecord',
    timeout: 5,
    maxLength: 30,
    transcribe: false,
    playBeep: true,
    trim: 'trim-silence',
  });

  response.writeHead(200, { 'Content-Type': 'text/xml' });
  response.end(voiceResponse.toString());
};
