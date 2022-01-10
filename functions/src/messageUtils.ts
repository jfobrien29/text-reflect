import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { DAYS_TO_MARK_INACTIVE } from './constants';
import { ICloudFunctionUser } from './interfaces';
import { dateStringDaysApart, formatDate, getRelevantDates } from './utils';

admin.initializeApp(functions.config().firebase);
const USERS_REF = admin.firestore().collection('users');

const markUserInactive = async (id: string): Promise<any> => {
  await USERS_REF.doc(id).update({ active: false });
};

const BASIC_FOLLOW_UP = 'Reply with what happened!';

const WEEK_GREETINGS = [
  'Heyo',
  'Good day',
  '🤠 Howdy',
  'YO',
  "What's cookin",
  "I hope you're doing well",
  'Good day',
];

const SUNDAY_GREETING = 'Hope you had a great weekend';

const pickGreeting = (day: number): string => {
  if (day === 0) {
    return SUNDAY_GREETING;
  }

  return WEEK_GREETINGS[Math.floor(Math.random() * WEEK_GREETINGS.length)];
};

export const generateMessageForUser = async (
  user: ICloudFunctionUser,
): Promise<string> => {
  const { today, yesterday } = getRelevantDates(user.timeZone);
  console.log(`Generating message for ${user.name} on ${today.string}`);

  const base = `${pickGreeting(today.day)} ${
    user.name
  }, it\'s time to reflect on your day 🔮.`;

  // if streak exists and last message was yesterday (aka it's alive)
  if (user.currentStreak > 0 && user.lastMessage === yesterday.string) {
    return `${base} Keep your ${user.currentStreak} day streak going! 🔥`;
  }

  // if today and user.lastMessage are 5 days apart, mark inactive and tell user
  const firstDate = user.lastMessage || formatDate(user.createdAt.toDate());
  const daysApart = dateStringDaysApart(firstDate, today.string);
  if (daysApart >= DAYS_TO_MARK_INACTIVE) {
    await markUserInactive(user.id);
    return `${base} (You've missed ${daysApart} days in a row. If you don't reply today, we'll stop sending you messages until you text again).`;
  }

  return `${base} ${BASIC_FOLLOW_UP}`;
};
