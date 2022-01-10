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
}
