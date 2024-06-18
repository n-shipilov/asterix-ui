import React, { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import "./Radio.scss";

const radio = cn("radio");

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** The content of the radio (usually a label) */
  children?: React.ReactNode;
};

export const Radio: React.FC<RadioProps> = (props) => {
  const { children, checked = false, disabled, ...attrs } = props;

  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setValue(checked);
  };

  return (
    <label
      className={radio({
        checked: value,
        disabled,
      })}
    >
      <input
        className={radio("control")}
        type="radio"
        checked={value}
        disabled={disabled}
        onChange={handleChange}
        {...attrs}
      />
      {children ? <span className={radio("label")}>{children}</span> : null}
    </label>
  );
};
