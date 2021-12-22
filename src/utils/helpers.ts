export enum DayStatus {
  PAST = 'Past', // If the user started a challenge in the middle of the month, status passed
  COMPLETED = 'Completed', // If the user completed their task on this day
  MISSED = 'Missed', // If the user missed this day
  UNACCOUNTED = 'Unaccounted', // If this day has passed, but there is no info
  FUTURE = 'Future', // If this day is in the future
}

export interface RelevantMonths {
  currentDate: number;
  currentMonth: number;
  currentYear: number;
  nextMonth: number;
  nextMonthYear: number;
  lastMonth: number;
  lastMonthYear: number;
}

function changeTimezone(date: any, ianatz: string) {
  // suppose the date is 12:00 UTC
  var invdate = new Date(
    date.toLocaleString('en-US', {
      timeZone: ianatz,
    }),
  );

  // then invdate will be 07:00 in Toronto
  // and the diff is 5 hours
  var diff = date.getTime() - invdate.getTime();

  // so 12:00 in Toronto is 17:00 UTC
  return new Date(date.getTime() - diff); // needs to substract
}

export const getRelevantDates = (timeZone?: string): RelevantMonths => {
  let now;
  now = new Date();
  if (timeZone) {
    now = changeTimezone(now, timeZone);
  }

  const currentDate = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const nextMonth = (currentMonth + 1) % 12;
  const nextMonthYear = nextMonth === 0 ? currentYear + 1 : currentYear;
  const lastMonth = (currentMonth - 1) % 12;
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  return {
    currentDate,
    currentMonth,
    currentYear,
    nextMonth,
    nextMonthYear,
    lastMonth,
    lastMonthYear,
  };
};

// 1st, 2nd, 3rd, 4th - 20th, 21st, 22nd, 23rd, 24th-30th, 31st
const st_suffix = [1, 21, 31];
const nd_suffix = [2, 22];
export const getDateSuffix = (date: number): string => {
  if (st_suffix.includes(date)) return 'st';
  if (nd_suffix.includes(date)) return 'nd';
  return 'th';
};

// Longest days in a row this person compelted their task
export const calculateLongestStreak = (dayStatusArray: DayStatus[]) => {
  let longestStreak = 0;
  let streak = 0;
  for (const day of dayStatusArray) {
    if (day === DayStatus.COMPLETED) {
      streak++;
    } else {
      if (streak > longestStreak) {
        longestStreak = streak;
      }
      streak = 0;
    }
  }

  return streak > longestStreak ? streak : longestStreak;
};

// Total days completed
export const calculateCompletedDays = (dayStatusArray: DayStatus[]) => {
  let completed = 0;
  for (const day of dayStatusArray) {
    if (day === DayStatus.COMPLETED) {
      completed++;
    }
  }

  return completed;
};

// How many days in a row since today this person has completed their task
export const calculateFireStreak = (
  daysCompleted: DayStatus[],
  currentDate: number,
): number => {
  let fireStreak = 0;
  let encounteredComplete = false;
  for (let dayIndex = currentDate - 1; dayIndex >= 0; dayIndex--) {
    if (daysCompleted[dayIndex] === DayStatus.COMPLETED) {
      fireStreak += 1;
      encounteredComplete = true;
    } else {
      if (encounteredComplete || daysCompleted[dayIndex] === DayStatus.MISSED) {
        break;
      }
    }
  }

  return fireStreak;
};

export const getReadableCurrentTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString();
};
