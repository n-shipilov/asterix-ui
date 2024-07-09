import { forwardRef } from "react";
import { cn } from "../utils/cn";
import "./Input.scss";

export type InputProps<T> = React.InputHTMLAttributes<HTMLInputElement> & {
  controlRef?: React.Ref<T>;
};

const input = cn("input");

export const Input: React.FC<InputProps<HTMLInputElement>> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const { className, disabled, controlRef, ...attrs } = props;

    return (
      <div className={input({ disabled }, className)} ref={ref}>
        <input
          className={input("control")}
          ref={controlRef}
          disabled={disabled}
          {...attrs}
        ></input>
      </div>
    );
  }
);
