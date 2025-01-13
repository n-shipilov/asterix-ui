import { forwardRef, useEffect, useRef, useState } from "react";
import { FieldError } from "react-hook-form";
import { Icon } from "components";
import { CloseIcon } from "components/CloseIcon";
import { useForkRef } from "hooks";
import { cn } from "../utils/cn";
import "./Input.scss";

type BaseInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

type InputSize = "s" | "m";

export type InputProps<T> = BaseInputProps & {
  controlRef?: React.Ref<T>;
  size?: InputSize;
  hasClear?: boolean;
  // TODO: возможно стоит использовать тип, не зависящий от библиотеки react-hook-form
  // Может и весь объект ошибки здесь не нужен
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

    useEffect(() => {
      setInputValue(value ?? "");
    }, [value]);

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

        innerControlRef.current?.focus();

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
