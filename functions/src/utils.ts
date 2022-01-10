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

export const getRelevantDates = (timeZone?: string) => {
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
