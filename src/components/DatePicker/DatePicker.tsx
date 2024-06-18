import React, { useLayoutEffect, useRef, useState } from "react";
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
  const { locale, format = "MM/DD/YYYY" } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setValue(value);
  };

  useLayoutEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement) {
      return;
    }
    inputElement.setSelectionRange(0, 2);
  });

  const handleFocus = () => {
    if (value) {
      return;
    } else {
      setValue(format);
    }
  };

  const handleBlur = () => {
    setValue("");
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setOpen(false);
  };

  return (
    <>
      <div className={block()}>
        <Input
          controlRef={inputRef}
          placeholder="Select date"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
