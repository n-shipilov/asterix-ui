import { forwardRef } from "react";
import { useCheckbox } from "hooks";
import { cn } from "../utils/cn";
import "./Switch.scss";

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: React.ReactNode;
};

const block = cn("switch");

export const Switch: React.FC<SwitchProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const { children, className, disabled } = props;

    const { checked, inputProps } = useCheckbox(props);

    return (
      <label
        className={block(
          {
            checked,
            disabled,
          },
          className,
        )}
      >
        <span className={block("indicator")}>
          <input className={block("control")} ref={ref} {...inputProps} />
        </span>
        {children ? <span className={block("label")}>{children}</span> : null}
      </label>
    );
  },
);
