import * as admin from 'firebase-admin';

// Separate Interfaces for the cloud functions. Keep these in sync with src/interfaces/*

export interface ICloudFunctionEntry {
  id?: string;
  value: string;
  method: string;

  // The date this message represents aka when the events happened
  date_for: string;
  // The timestamp this message was received
  time: admin.firestore.Timestamp;
  // Milliseconds since epoch when this message was received
  timestamp: number;
}

// User Interface
export interface ICloudFunctionUser {
  id?: string;
  currentStreak: number;
  lastMessage?: string;
  longestStreak: number;
  name: string;
  phoneNumber: string;
  sendCompleteResponse: boolean;
  sendReminders: boolean;
  timeZone: string;
}
