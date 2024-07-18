import React from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "components";
import { cn } from "../../utils/cn";
import "./Item.scss";

export type SidebarItem = {
  icon?: React.ReactNode;
  label: string;
  link: string;
  children?: SidebarItem[];
};

type ItemProps = SidebarItem & {
  collapsed?: boolean;
};

const block = cn("sidebar-item");

export const Item: React.FC<ItemProps> = (props) => {
  const { icon, link, label, collapsed } = props;

  const item = (
    <li
      className={block({
        collapsed: collapsed,
      })}
    >
      <NavLink
        to={link}
        className={({ isActive }) => block("link", { active: isActive })}
      >
        <div className={block("icon")}>{icon}</div>
        <div className={block("label")}>{label}</div>
      </NavLink>
    </li>
  );

  if (collapsed) {
    return (
      <Tooltip placement="right" text={label} offset={[0, 12]} openDelay={300}>
        {item}
      </Tooltip>
    );
  }

  return item;
};
