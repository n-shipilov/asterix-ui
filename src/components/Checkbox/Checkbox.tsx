import { forwardRef } from "react";
import { useCheckbox } from "hooks";
import { cn } from "../utils/cn";
import { CheckboxDashIcon } from "./CheckboxDashIcon";
import { CheckboxTickIcon } from "./CheckboxTickIcon";
import "./Checkbox.scss";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
  indeterminate?: boolean;
};

const block = cn("checkbox");

export const Checkbox: React.FC<CheckboxProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const { children, className, style, disabled, indeterminate = false } = props;

    const { checked, inputProps } = useCheckbox(props);

    return (
      <label
        className={block(
          {
            checked,
            disabled,
            indeterminate,
          },
          className,
        )}
        style={style}
      >
        <span className={block("indicator")}>
          <span className={block("icon")}>
            {indeterminate ? <CheckboxDashIcon /> : <CheckboxTickIcon />}
          </span>
          <input className={block("control")} ref={ref} {...inputProps} />
        </span>
        {children ? <span className={block("label")}>{children}</span> : null}
      </label>
    );
  },
);
