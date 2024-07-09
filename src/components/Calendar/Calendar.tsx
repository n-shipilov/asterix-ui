import React from "react";
import { cn } from "../utils/cn";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { ChevronLeft } from "../ChevronLeft";
import { ChevronRight } from "../ChevronRight";
import { useCalendar } from "./hooks/useCalendar";
import { checkIsToday } from "./utils/checkIsToday";
import { checkDateIsEqual } from "./utils/checkDateIsEqual";
import { ModeType } from "./types";
import "./Calendar.scss";

export type CalendarProps = {
  mode?: ModeType;
  locale?: string;
  firstDayOfWeek?: number;
  selectedDate?: Date;
  onSelectDate: (date: Date) => void;
};

const block = cn("calendar");

export const Calendar: React.FC<CalendarProps> = (props) => {
  const {
    mode = "days",
    locale = "default",
    firstDayOfWeek,
    selectedDate: date,
    onSelectDate,
  } = props;

  const { functions, state } = useCalendar({
    mode,
    locale,
    firstDayOfWeek,
    selectedDate: date,
  });

  return (
    <div className={block()}>
      <div className={block("header")}>
        {state.calendarMode === "days" && (
          <Button
            view="ghost"
            onClick={() => functions.setCalendarMode("months")}
          >
            {`${state.monthesNames[state.selectedMonth.monthIndex].month} ${state.selectedYear}`}
          </Button>
        )}
        {state.calendarMode === "months" && (
          <Button
            view="ghost"
            onClick={() => functions.setCalendarMode("years")}
          >
            {state.selectedYear}
          </Button>
        )}
        {state.calendarMode === "years" && (
          <Button view="ghost" disabled>
            {`${state.selectedYearsInterval[0]} - ${
              state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ]
            }`}
          </Button>
        )}
        <div className={block("controls")}>
          <Button view="ghost" onClick={() => functions.onClickArrow("left")}>
            <Icon data={ChevronLeft} />
          </Button>
          <Button view="ghost" onClick={() => functions.onClickArrow("right")}>
            <Icon data={ChevronRight} />
          </Button>
        </div>
      </div>
      <div className={block("body")}>
        {state.calendarMode === "days" && (
          <div
            className={block("grid", {
              mode: state.calendarMode,
            })}
          >
            <div className={block("grid-row")}>
              {state.weekDaysNames.map((weekDaysName) => (
                <div className={block("weekday")} key={weekDaysName.dayShort}>
                  {weekDaysName.dayShort}
                </div>
              ))}
            </div>
            <div className={block("grid-rowgroup")}>
              {state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDay.date
                );
                const isOutOfBoundary =
                  day.monthIndex !== state.selectedMonth.monthIndex;
                const isWeekendDay =
                  day.dayNumberInWeek === 6 || day.dayNumberInWeek === 0;

                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedDay(day);
                      onSelectDate(day.date);
                    }}
                    className={block("item", {
                      today: isToday,
                      selected: isSelectedDay,
                      "out-of-boundary": isOutOfBoundary,
                      weekend: isWeekendDay,
                    })}
                  >
                    {day.dayNumber}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {state.calendarMode === "months" && (
          <div
            className={block("grid", {
              mode: state.calendarMode,
            })}
          >
            <div className={block("grid-rowgroup")}>
              {state.monthesNames.map((monthesName) => {
                const isCurrentMonth =
                  new Date().getMonth() === monthesName.monthIndex &&
                  state.selectedYear === new Date().getFullYear();
                const isSelectedMonth =
                  monthesName.monthIndex === state.selectedMonth.monthIndex;

                return (
                  <div
                    key={monthesName.month}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedMonthByIndex(monthesName.monthIndex);
                      functions.setCalendarMode("days");
                    }}
                    className={block("item", {
                      current: isCurrentMonth,
                      selected: isSelectedMonth,
                    })}
                  >
                    {monthesName.monthShort}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {state.calendarMode === "years" && (
          <div
            className={block("grid", {
              mode: state.calendarMode,
            })}
          >
            <div className={block("grid-rowgroup")}>
              <div
                className={block("item", {
                  "out-of-boundary": true,
                })}
              >
                {state.selectedYearsInterval[0] - 1}
              </div>
              {state.selectedYearsInterval.map((year) => {
                const isCurrentYear = new Date().getFullYear() === year;
                const isSelectedYear = year === state.selectedYear;

                return (
                  <div
                    key={year}
                    aria-hidden
                    onClick={() => {
                      functions.setSelectedYear(year);
                      functions.setCalendarMode("months");
                    }}
                    className={block("item", {
                      current: isCurrentYear,
                      selected: isSelectedYear,
                    })}
                  >
                    {year}
                  </div>
                );
              })}
              <div
                className={block("item", {
                  "out-of-boundary": true,
                })}
              >
                {state.selectedYearsInterval[
                  state.selectedYearsInterval.length - 1
                ] + 1}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
