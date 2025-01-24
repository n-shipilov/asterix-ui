import React from "react";
import { cn } from "../../utils/cn";
import "./Option.scss";

export type DropdownOption = {
  disabled?: boolean;
  icon?: React.ReactElement;
  label?: string;
  value: string | number;
};

type OptionProps = {
  option: DropdownOption;
  onClick?: (event: React.MouseEvent<HTMLElement>, option: DropdownOption) => void;
};

const block = cn("dropdown-option");

export const Option: React.FC<OptionProps> = (props) => {
  const { option, onClick } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (option.disabled) {
      return;
    }
    onClick?.(event, option);
  };

  return (
    <li
      className={block({
        disabled: option.disabled,
      })}
      onClick={handleClick}
      role="option"
    >
      {option.icon && <div className={block("icon")}>{option.icon}</div>}
      <div className={block("title")}>{option.label}</div>
    </li>
  );
};
