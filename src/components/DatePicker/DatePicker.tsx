import React, { useState } from "react";
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

  const [anchorElement, setAnchorElement] = useState<HTMLInputElement | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date>(value);
  const [open, setOpen] = useState(false);

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <div className={block()}>
        <Input
          className={block("control")}
          controlRef={setAnchorElement}
          placeholder={placeholder}
          onClick={() => setOpen((prev) => !prev)}
          value={selectedDate?.toLocaleDateString()}
          readOnly
        />
      </div>
      <Popup
        anchorElement={anchorElement}
        placement="bottom-start"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <div className={block("popup")}>
          <Calendar locale={locale} selectedDate={selectedDate} onSelectDate={handleSelectDate} />
        </div>
      </Popup>
    </>
  );
};
