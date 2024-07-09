import { CalendarProps } from "./Calendar";

export type ModeType = "days" | "months" | "years";

export type UseCalendarParams = Omit<CalendarProps, "onSelectDate">;
