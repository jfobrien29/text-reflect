// User Interface
export interface IUser {
  currentStreak: number;
  lastMessage?: string;
  longestStreak: number;
  name: string;
  phoneNumber: string;
  sendCompleteResponse: boolean;
  sendReminders: boolean;
  timeZone: string;
}
