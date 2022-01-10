export interface Dates {
  day: number;
  date: number;
  month: number;
  year: number;
  string: string;
}

export interface RelevantDates {
  today: Dates;
  yesterday: Dates;
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

const makeDateString = (date: number, month: number, year: number) =>
  `${year}-${month + 1}-${date}`;

export const formatDate = (date: Date) => {
  return makeDateString(date.getDate(), date.getMonth(), date.getFullYear());
};

export const getRelevantDates = (timeZone?: string): RelevantDates => {
  let now;
  now = new Date();
  if (timeZone) {
    now = changeTimezone(now, timeZone);
  }

  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  return {
    today: {
      day: now.getDay(),
      date: now.getDate(),
      month: now.getMonth(),
      year: now.getFullYear(),
      string: makeDateString(now.getDate(), now.getMonth(), now.getFullYear()),
    },
    yesterday: {
      day: yesterday.getDay(),
      date: yesterday.getDate(),
      month: yesterday.getMonth(),
      year: yesterday.getFullYear(),
      string: makeDateString(
        yesterday.getDate(),
        yesterday.getMonth(),
        yesterday.getFullYear(),
      ),
    },
  };
};

export const dateStringToDate = (dateString: string) => {
  const [year, month, day] = dateString.split('-');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};

export const dateStringDaysApart = (
  dateString1: string,
  dateString2: string,
) => {
  const date1 = dateStringToDate(dateString1);
  const date2 = dateStringToDate(dateString2);
  return Math.round(
    Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24),
  );
};
