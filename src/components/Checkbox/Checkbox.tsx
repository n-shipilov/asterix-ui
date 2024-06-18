import { forwardRef, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { CheckboxDashIcon } from "./CheckboxDashIcon";
import { CheckboxTickIcon } from "./CheckboxTickIcon";
import "./Checkbox.scss";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
  indeterminate?: boolean;
};

const checkbox = cn("checkbox");

export const Checkbox: React.FC<CheckboxProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const {
      children,
      className,
      style,
      checked = false,
      disabled,
      indeterminate = false,
      ...attrs
    } = props;

    const [value, setValue] = useState(checked);

    useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setValue(checked);
    };

    return (
      <label
        className={checkbox(
          {
            checked: value,
            indeterminate,
            disabled,
          },
          className
        )}
        style={style}
        data-qa="asd"
      >
        <span className={checkbox("indicator")}>
          <span className={checkbox("icon")}>
            {indeterminate ? <CheckboxDashIcon /> : <CheckboxTickIcon />}
          </span>
          <input
            type="checkbox"
            className={checkbox("control")}
            ref={ref}
            checked={value}
            disabled={disabled}
            onChange={handleChange}
            {...attrs}
          />
        </span>
        {children ? (
          <span className={checkbox("label")}>{children}</span>
        ) : null}
      </label>
    );
  }
);
