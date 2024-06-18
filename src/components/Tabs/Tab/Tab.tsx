import React from "react";
import { tabs } from "../Tabs";
import "./Tab.scss";

export type TabProps = {
  label: string;
  content?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onSelectTab?: (label: string) => void;
};

export const Tab: React.FC<TabProps> = (props) => {
  const { label, active, disabled, onSelectTab } = props;

  const handleTabClick = () => {
    if (!disabled) {
      onSelectTab && onSelectTab(label);
    }
  };

  return (
    <li
      className={tabs("item", { active, disabled })}
      onClick={handleTabClick}
      aria-selected={active}
      role="tab"
      tabIndex={disabled ? -1 : 0}
    >
      {label}
    </li>
  );
};
