import React from "react";
import { cn } from "../../utils/cn";

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
  const { icon, link, label } = props;

  return (
    <li className={block()}>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? "sidebar-item__link sidebar-item__link_active"
            : "sidebar-item__link"
        }
      >
        <div className={block("icon")}>{icon}</div>
        <div className={block("label")}>{label}</div>
      </NavLink>
    </li>
  );
};
