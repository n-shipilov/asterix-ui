import { forwardRef, useRef, useState } from "react";
import { FieldError } from "react-hook-form";
import { Icon } from "components";
import { CloseIcon } from "components/CloseIcon";
import { useForkRef } from "hooks";
import { cn } from "../utils/cn";
import "./Input.scss";

type InputSize = "s" | "m";

export type InputProps<T> = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  controlRef?: React.Ref<T>;
  // TODO: возможно стоит использовать тип, не зависящий от библиотеки react-hook-form
  // Может и весь объект ошибки здесь не нужен
  size?: InputSize;
  hasClear?: boolean;
  error?: FieldError;
};

const input = cn("input");

export const Input: React.FC<InputProps<HTMLInputElement>> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const {
      className,
      disabled,
      value,
      onChange,

      controlRef,
      size = "m",
      hasClear = false,

      error,
      ...attrs
    } = props;

    const innerControlRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

    const handleRef = useForkRef(controlRef, innerControlRef);

    const [inputValue, setInputValue] = useState(value ?? "");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
      setInputValue("");

      const control = innerControlRef.current;
      if (control) {
        const syntheticEvent = Object.create(event);
        syntheticEvent.target = control;
        syntheticEvent.currentTarget = control;

        control.value = "";

        if (onChange) {
          onChange(syntheticEvent);
        }
      }
    };

    const isClearControlVisible = hasClear && !disabled && inputValue;

    return (
      <div className={input({ size, disabled, state_error: !!error }, className)} ref={ref}>
        <input
          className={input("control")}
          ref={handleRef}
          value={inputValue}
          onChange={handleChange}
          disabled={disabled}
          {...attrs}
        ></input>
        {isClearControlVisible && (
          <button className={input("btn-clear")} onClick={handleClear}>
            <Icon data={CloseIcon} size={16} />
          </button>
        )}
      </div>
    );
  },
);
