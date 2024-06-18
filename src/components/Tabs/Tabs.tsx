import React, { useState } from "react";
import { cn } from "../utils/cn";
import { Tab, TabProps } from "./Tab";
import "./Tabs.scss";

type TabsProps = {
  activeTab?: string;
  items: TabProps[];
  onChange?: (label: string) => void;
};

export const tabs = cn("tabs");

export const Tabs: React.FC<TabsProps> = (props) => {
  const { activeTab, items, onChange } = props;

  const [selectTab, setSelectTab] = useState<string>(
    activeTab ? activeTab : items[0].label
  );

  const handleSelectTab = (label: string) => {
    setSelectTab(label);
    onChange && onChange(label);
  };

  const getTabContent = (tab: string) =>
    items.find((item) => item.label === tab)?.content;

  return (
    <div className={tabs()}>
      <ul className={tabs("list")} role="tablist">
        {items.map((item, index) => (
          <Tab
            label={item.label}
            active={item.label === selectTab}
            disabled={item.disabled}
            onSelectTab={handleSelectTab}
            key={index}
          />
        ))}
      </ul>
      <div
        className={tabs("body")}
        aria-labelledby={selectTab}
        // aria-hidden="false"
        role="tabpanel"
      >
        {getTabContent(selectTab)}
      </div>
    </div>
  );
};
