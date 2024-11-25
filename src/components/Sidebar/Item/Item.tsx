import React, { useState } from "react";
import { Icon, Tooltip } from "components";
import { cn } from "../../utils/cn";
import "./Item.scss";
import { ChevronRight } from "components/ChevronRight";

export type SidebarItem = {
  icon?: React.ReactNode;
  label: string;
  link?: string;
  children?: SidebarItem[];
  onItemClick?: (item: SidebarItem, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

type ItemProps = SidebarItem & {
  collapsed?: boolean;
};

const block = cn("sidebar-item");

export const Item: React.FC<ItemProps> = (props) => {
  const { icon, link, label, children, collapsed, onItemClick } = props;

  const [visibleSubmenu, setVisibleSubmenu] = useState(false);

  const item = (
    <li
      className={block({
        collapsed: collapsed,
      })}
      onClick={(event) => onItemClick?.({ icon, link, label, children }, event)}
    >
      {link ? (
        <a href={link} className={block("link")}>
          {icon && <div className={block("icon")}>{icon}</div>}
          <div className={block("label")}>{label}</div>
        </a>
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
