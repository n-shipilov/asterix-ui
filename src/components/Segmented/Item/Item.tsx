import React, { forwardRef, isValidElement } from "react";
import { cn } from "../../utils/cn";
import { Icon } from "components/Icon";

export type SegmentedOption = {
  disabled?: boolean;
  label?: React.ReactNode;
  value: string | number;
};

export type ItemProps = {
  option: SegmentedOption;
  checked?: boolean;
  ref?: React.ForwardedRef<HTMLLabelElement>;
};

export type ComponentProps = {
  onChange?: (value: string | number) => void;
};

const segmented = cn("segmented");

export const Item = forwardRef(
  (props: ItemProps & ComponentProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    const { option, checked, onChange } = props;

    const { label, value, disabled } = option;

    const icon = isValidElement(label) && label.type === Icon;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;

      if (checked) {
        onChange?.(value);
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
        <span className={segmented("item-label", { icon })}>{label}</span>
      </label>
    );
  },
);
