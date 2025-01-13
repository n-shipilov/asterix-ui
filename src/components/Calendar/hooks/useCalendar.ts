import { useMemo, useState } from "react";
import { ModeType, UseCalendarParams } from "../types";
import { createDate } from "../utils/createDate";
import { createMonth, getMonthNumberOfDays } from "../utils/createMonth";
import { getMonthesNames } from "../utils/getMonthsNames";
import { getWeekDaysNames } from "../utils/getWeekDaysNames";

const DAYS_IN_WEEK = 7;

const getYearsInterval = (year: number) => {
  const startYear = Math.floor(year / 10) * 10;
  return [...Array(10)].map((_, index) => startYear + index);
};

export const useCalendar = ({
  mode = "days",
  locale = "default",
  firstDayOfWeek = 1,
  selectedDate: date,
}: UseCalendarParams) => {
  const firstDayNumberOfWeek = firstDayOfWeek;
  const [calendarMode, setCalendarMode] = useState<ModeType>(mode);
  const [selectedDay, setSelectedDay] = useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = useState(
    createMonth({
      date: new Date(selectedDay.year, selectedDay.monthIndex),
      locale,
    }),
  );
  const [selectedYear, setSelectedYear] = useState(selectedDay.year);
  const [selectedYearsInterval, setSelectedYearsInterval] = useState(
    getYearsInterval(selectedDay.year),
  );

  const days = useMemo(() => selectedMonth.createMonthDays(), [selectedMonth, selectedYear]);
  const monthesNames = useMemo(() => getMonthesNames(locale), []);
  const weekDaysNames = useMemo(() => getWeekDaysNames(firstDayNumberOfWeek, locale), []);

  const calendarDays = useMemo(() => {
    const monthNumberOfDays = getMonthNumberOfDays(selectedMonth.monthIndex, selectedYear);

    const prevMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays();

    const nextMonthDays = createMonth({
      date: new Date(selectedYear, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays();

    const firstDay = days[0];

    const shiftIndex = firstDayNumberOfWeek - 1;
    const numberOfPrevDays =
      firstDay.dayNumberInWeek - 1 - shiftIndex < 0
        ? DAYS_IN_WEEK - (firstDayNumberOfWeek - firstDay.dayNumberInWeek)
        : firstDay.dayNumberInWeek - 1 - shiftIndex;

    const numberOfNextDays = 42 - numberOfPrevDays - monthNumberOfDays;

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

    const result = [];

    for (let i = 0; i < numberOfPrevDays; i += 1) {
      const inverted = numberOfPrevDays - i;
      result[i] = prevMonthDays[prevMonthDays.length - inverted];
    }

    for (let i = numberOfPrevDays; i < totalCalendarDays - numberOfNextDays; i += 1) {
      result[i] = days[i - numberOfPrevDays];
    }

    for (let i = totalCalendarDays - numberOfNextDays; i < totalCalendarDays; i += 1) {
      result[i] = nextMonthDays[i - totalCalendarDays + numberOfNextDays];
    }

    return result;
  }, [selectedMonth.year, selectedMonth.monthIndex, selectedYear]);

  const onClickArrow = (direction: "right" | "left") => {
    if (calendarMode === "years" && direction === "left") {
      return setSelectedYearsInterval(getYearsInterval(selectedYearsInterval[0] - 10));
    }

    if (calendarMode === "years" && direction === "right") {
      return setSelectedYearsInterval(getYearsInterval(selectedYearsInterval[0] + 10));
    }

    if (calendarMode === "months" && direction === "left") {
      const year = selectedYear - 1;
      if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
      return setSelectedYear(selectedYear - 1);
    }

    if (calendarMode === "months" && direction === "right") {
      const year = selectedYear + 1;
      if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
      return setSelectedYear(selectedYear + 1);
    }

    if (calendarMode === "days") {
      const monthIndex =
        direction === "left" ? selectedMonth.monthIndex - 1 : selectedMonth.monthIndex + 1;
      if (monthIndex === -1) {
        const year = selectedYear - 1;
        setSelectedYear(year);
        if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
        return setSelectedMonth(createMonth({ date: new Date(selectedYear - 1, 11), locale }));
      }

      if (monthIndex === 12) {
        const year = selectedYear + 1;
        setSelectedYear(year);
        if (!selectedYearsInterval.includes(year)) setSelectedYearsInterval(getYearsInterval(year));
        return setSelectedMonth(createMonth({ date: new Date(year, 0), locale }));
      }

      setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
    }
  };

  const setSelectedMonthByIndex = (monthIndex: number) => {
    setSelectedMonth(createMonth({ date: new Date(selectedYear, monthIndex), locale }));
  };

  return {
    state: {
      calendarMode,
      selectedDay,
      selectedMonth,
      selectedYear,
      selectedYearsInterval,
      calendarDays,
      monthesNames,
      weekDaysNames,
    },

    functions: {
      setCalendarMode,
      setSelectedDay,
      setSelectedYear,
      onClickArrow,
      setSelectedMonthByIndex,
    },
  };
};
