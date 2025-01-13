interface CreateDateParams {
  locale?: string;
  date?: Date;
}

export const getWeekNumber = (date: Date) => {
  const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfTheYear.getTime()) / 86400000;

  return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) / 7);
};

export const createDate = (params?: CreateDateParams) => {
  const locale = params?.locale ?? "default";

  const d = params?.date ?? new Date();
  const dayNumber = d.getDate();
  const day = d.toLocaleDateString(locale, { weekday: "long" });
  const dayNumberInWeek = d.getDay();
  const dayShort = d.toLocaleDateString(locale, { weekday: "short" });
  const year = d.getFullYear();
  const yearShort = d.toLocaleDateString(locale, { year: "2-digit" });
  const month = d.toLocaleDateString(locale, { month: "long" });
  const monthShort = d.toLocaleDateString(locale, { month: "short" });
  const monthNumber = d.getMonth() + 1;
  const monthIndex = d.getMonth();
  const timestamp = d.getTime();
  const week = getWeekNumber(d);

  return {
    date: d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
    week,
  };
};
