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
};

export const DatePicker: React.FC<DatePickerProps> = (props) => {
  const { locale = "default", format = "DD.MM.YYYY" } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const handleFocus = () => {
    setOpen(true);
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <div className={block()}>
        <Input
          controlRef={inputRef}
          placeholder="Select date"
          onFocus={handleFocus}
          onChange={handleChange}
        />
      </div>
      <Popup
        anchorRef={inputRef}
        placement="bottom-start"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={block("popup")}>
          <Calendar
            locale={locale}
            selectedDate={selectedDate}
            onSelectDate={handleSelectDate}
          />
        </div>
      </Popup>
    </>
  );
};
