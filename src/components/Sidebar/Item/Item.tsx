import React, { useState } from "react";
import { Icon, Tooltip } from "components";
import { cn } from "../../utils/cn";
import "./Item.scss";
import { ChevronRight } from "components/ChevronRight";

export type SidebarItem = {
  id: string;
  icon?: React.ReactNode;
  label: string;
  link?: string;
  children?: SidebarItem[];
};

type ItemProps = {
  item: SidebarItem;
  collapsed?: boolean;
  selectedItemId: string;
  onItemClick?: (item: SidebarItem, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

const block = cn("sidebar-item");

export const Item: React.FC<ItemProps> = (props) => {
  const { item, collapsed, selectedItemId, onItemClick } = props;

  const { id, icon, link, label, children } = item;

  const [visibleSubmenu, setVisibleSubmenu] = useState(false);

  const handleItemClick = (
    item: SidebarItem,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    onItemClick?.(item, event);
  };

  const renderItem = (
    <li
      className={block({
        collapsed: collapsed,
      })}
      onClick={(event) => handleItemClick(item, event)}
    >
      {link ? (
        <a href={link} className={block("link", { active: selectedItemId === id })}>
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
            <Item
              item={item}
              selectedItemId={selectedItemId}
              onItemClick={onItemClick}
              key={index}
            />
          ))}
        </ul>
      )}
    </li>
  );

  if (collapsed && !visibleSubmenu) {
    return (
      <Tooltip placement="right" text={label} offset={[0, 12]} openDelay={300}>
        {renderItem}
      </Tooltip>
    );
  }

  return renderItem;
};
