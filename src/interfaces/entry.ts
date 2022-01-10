import { firebaseAdmin } from '@/utils/firebaseAdmin';

export interface IEntry {
  value: string;
  method: string;

  // The date this message represents aka when the events happened
  date_for: string;
  // The timestamp this message was received
  time: firebaseAdmin.firestore.Timestamp;
  // Milliseconds since epoch when this message was received
  timestamp: number;
}
