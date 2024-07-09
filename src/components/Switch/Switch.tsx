import { forwardRef, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import "./Switch.scss";

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
};

const switcher = cn("switch");

export const Switch: React.FC<SwitchProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const { children, className, checked = false, disabled, ...attrs } = props;

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
        className={switcher(
          {
            checked: value,
            disabled,
          },
          className
        )}
      >
        <span className={switcher("indicator")}>
          <input
            type="checkbox"
            className={switcher("control")}
            ref={ref}
            checked={value}
            disabled={disabled}
            onChange={handleChange}
            {...attrs}
          />
        </span>
        {children ? (
          <span className={switcher("label")}>{children}</span>
        ) : null}
      </label>
    );
  }
);
