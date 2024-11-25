import React, { useState } from "react";
import { useLocalStorage } from "hooks";
import { Icon } from "../Icon";
import { SvgIcon } from "../SvgIcon";
import { cn } from "../utils/cn";
import { Item, SidebarItem } from "./Item";
import "./Sidebar.scss";

export type SidebarProps = {
  items: SidebarItem[];
  onItemClick?: (item: SidebarItem, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

const block = cn("sidebar");

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { items, onItemClick } = props;

  const [collapsed, setCollapsed] = useLocalStorage("collapsed", false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <nav
      className={block({
        collapsed: collapsed,
      })}
    >
      <div className={block("logo")}></div>
      <ul className={block("list")}>
        {items.map((item, index) => (
          <Item item={item} collapsed={collapsed} onItemClick={onItemClick} key={index} />
        ))}
      </ul>
      <ul className={block("footer")}>
        <li>
          <button className={block("toggle")} onClick={() => setCollapsed((prev) => !prev)}>
            <Icon className={block("toggle-icon")} data={SvgIcon} />
            <div className={block("toggle-label")}>Collapse menu</div>
          </button>
        </li>
      </ul>
    </nav>
  );
};
