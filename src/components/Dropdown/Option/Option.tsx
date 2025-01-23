import React from "react";
import { cn } from "../../utils/cn";
import "./Option.scss";

export type DropdownOption = {
  value: React.Key;
  label?: string;
  icon?: React.ReactElement;
  disabled?: boolean;
};

type OptionProps = {
  option: DropdownOption;
  onClick?: (event: React.MouseEvent<HTMLElement>, option: DropdownOption) => void;
};

const dropdownOption = cn("dropdown-option");

export const Option: React.FC<OptionProps> = (props) => {
  const { option, onClick } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (option.disabled) {
      return;
    }
    onClick && onClick(event, option);
  };

  return (
    <li
      className={dropdownOption({
        disabled: option.disabled,
      })}
      onClick={handleClick}
      role="option"
    >
      {option.icon && <div className={dropdownOption("icon")}>{option.icon}</div>}
      <div className={dropdownOption("title")}>{option.label}</div>
    </li>
  );
};
