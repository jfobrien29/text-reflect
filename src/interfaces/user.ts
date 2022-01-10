import { firebaseAdmin } from '@/utils/firebaseAdmin';

// User Interface
export interface IUser {
  id: string;
  currentStreak: number;
  lastMessage?: string;
  longestStreak: number;
  name: string;
  phoneNumber: string;
  sendCompletionResponse: boolean;
  sendReminders: boolean;
  timeZone: string;
  active: boolean;

  createdAt: firebaseAdmin.firestore.Timestamp;
}
