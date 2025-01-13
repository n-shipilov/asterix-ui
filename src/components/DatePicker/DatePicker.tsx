import React, { useRef, useState } from "react";
import { Input } from "../Input";
import { Popup } from "../Popup";
import { Calendar } from "../Calendar";
import { cn } from "../utils/cn";
import "./DatePicker.scss";

const block = cn("date-picker");

type DatePickerProps = {
  locale?: string;
  format: string;
  placeholder?: string;
  minDate?: Date;
  maxDate?: Date;
  value: Date;
};

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const {
    locale = "default",
    format = "DD.MM.YYYY",
    placeholder = "Select date",
    minDate,
    maxDate,
    value,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedDate, setSelectedDate] = useState<Date>(value);
  const [open, setOpen] = useState(false);

  const handleFocus = () => {
    setOpen(true);
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setOpen(false);
  };

  return (
    <>
      <div className={block()}>
        <Input
          className={block("control")}
          controlRef={inputRef}
          placeholder={placeholder}
          onFocus={handleFocus}
          value={selectedDate?.toLocaleDateString()}
          readOnly
        />
      </div>
      <Popup
        anchorRef={inputRef}
        placement="bottom-start"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={block("popup")}>
          <Calendar locale={locale} selectedDate={selectedDate} onSelectDate={handleSelectDate} />
        </div>
      </Popup>
    </>
  );
};
