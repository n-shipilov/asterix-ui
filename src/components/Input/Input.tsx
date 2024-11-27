import { forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "../utils/cn";
import "./Input.scss";

export type InputProps<T> = React.InputHTMLAttributes<HTMLInputElement> & {
  controlRef?: React.Ref<T>;
  // TODO: возможно стоит использовать тип, не зависящий от библиотеки react-hook-form
  // Может и весь объект ошибки здесь не нужен
  error?: FieldError;
};

const input = cn("input");

export const Input: React.FC<InputProps<HTMLInputElement>> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const { className, disabled, controlRef, error, ...attrs } = props;

    return (
      <div className={input({ disabled, state_error: !!error }, className)} ref={ref}>
        <input className={input("control")} ref={controlRef} disabled={disabled} {...attrs}></input>
      </div>
    );
  },
);
