import { ICloudFunctionUser } from './interfaces';
import { getRelevantDates } from './utils';

export const generateMessageForUser = (user: ICloudFunctionUser): string => {
  const { currentDate, currentMonth, currentYear } = getRelevantDates();
  const structuredDate = `${currentYear}-${currentMonth + 1}-${currentDate}`;
  console.log(`Generating message for ${user.name} on ${structuredDate}`);

  const base = `Hey ${user.name}, it\'s time to reflect on your day 🔮.`;
  const basic = 'Reply with what happened!';

  if (user.currentStreak > 0) {
    return `${base} Keep your ${user.currentStreak} day streak going! 🔥`;
  }

  return `${base} ${basic}`;
};
