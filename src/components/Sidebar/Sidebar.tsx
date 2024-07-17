import React from "react";
import { useLocalStorage } from "../../hooks";
import { cn } from "../utils/cn";
import { Item, SidebarItem } from "./Item";
import "./Sidebar.scss";

export type SidebarProps = {
  items: SidebarItem[];
};

const block = cn("sidebar");

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { items } = props;

  const [collapsed, setCollapsed] = useLocalStorage("collapsed", false);

  return (
    <nav className={block()}>
      <ul className={block("list")}>
        {items.map((item) => (
          <Item collapsed={collapsed} {...item} />
        ))}
      </ul>
    </nav>
  );
};
