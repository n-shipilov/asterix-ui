import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Tooltip } from "components";
import { cn } from "../../utils/cn";
import "./Item.scss";
import { ChevronRight } from "components/ChevronRight";

export type SidebarItem = {
  icon?: React.ReactNode;
  label: string;
  link?: string;
  children?: SidebarItem[];
};

type ItemProps = SidebarItem & {
  collapsed?: boolean;
};

const block = cn("sidebar-item");

export const Item: React.FC<ItemProps> = (props) => {
  const { icon, link, label, children, collapsed } = props;

  const [visibleSubmenu, setVisibleSubmenu] = useState(false);

  const item = (
    <li
      className={block({
        collapsed: collapsed,
      })}
    >
      {link ? (
        <Link to={link} className={block("link")}>
          {icon && <div className={block("icon")}>{icon}</div>}
          <div className={block("label")}>{label}</div>
        </Link>
      ) : (
        <div className={block("link")} onClick={() => setVisibleSubmenu((prev) => !prev)}>
          {icon && <div className={block("icon")}>{icon}</div>}
          <div className={block("label")}>{label}</div>
          <div className={block("toggle", { active: visibleSubmenu })}>
            <Icon size={16} data={ChevronRight} color="var(--st-color-text-secondary)" />
          </div>
        </div>
      )}
      {children && visibleSubmenu && (
        <ul className={block("submenu")}>
          {children.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </ul>
      )}
    </li>
  );

  if (collapsed && !visibleSubmenu) {
    return (
      <Tooltip placement="right" text={label} offset={[0, 12]} openDelay={300}>
        {item}
      </Tooltip>
    );
  }

  return item;
};
