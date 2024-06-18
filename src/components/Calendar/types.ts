export type ModeType = "days" | "months" | "years";

export type CalendarProps = {
  mode?: ModeType;
  locale?: string;
  firstDayOfWeek?: number;
  selectedDate?: Date;
  onSelectDate: (date: Date) => void;
};

export type UseCalendarParams = Omit<CalendarProps, "onSelectDate">;
