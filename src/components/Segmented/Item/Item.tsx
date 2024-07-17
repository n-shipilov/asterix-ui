import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

export type SegmentedOption = {
  label?: React.ReactNode;
  value: string;
  disabled?: boolean;
};

export type ItemProps = {
  option: SegmentedOption;
  checked?: boolean;
  ref?: React.ForwardedRef<HTMLLabelElement>;
};

export type ComponentProps = {
  onChange?: (value: string) => void;
};

const segmented = cn("segmented");

export const Item = forwardRef(
  (
    props: ItemProps & ComponentProps,
    ref: React.ForwardedRef<HTMLLabelElement>
  ) => {
    const { option, checked, onChange } = props;

    const { label, value, disabled } = option;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;

      if (checked) {
        onChange && onChange(value);
      }
    };

    return (
      <label
        className={segmented("item", {
          disabled,
          checked,
        })}
        ref={ref}
      >
        <input
          className={segmented("item-control")}
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
        />
        <span className={segmented("item-label")}>{label}</span>
      </label>
    );
  }
);
