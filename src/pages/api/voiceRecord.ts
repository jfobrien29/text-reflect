import { firebaseAdmin } from '@/utils/firebaseAdmin';
import * as twilioLib from 'twilio';

const FEEDBACK_REF = firebaseAdmin.firestore().collection('feedback');

export default async (request: any, response: any) => {
  const { RecordingUrl, From } = request.body;

  // Save the feedback
  await FEEDBACK_REF.add({
    type: 'VOICE',
    feedbackRecordingUrl: RecordingUrl,
    from: From,
  });

  // And respond
  const voiceResponse = new twilioLib.twiml.VoiceResponse();
  voiceResponse.say('Thanks for your feedback, stay groovy!');

  response.writeHead(200, { 'Content-Type': 'text/xml' });
  response.end(voiceResponse.toString());
};
