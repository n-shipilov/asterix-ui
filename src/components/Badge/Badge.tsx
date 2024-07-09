import React from "react";
import { cn } from "../utils/cn";
import "./Badge.scss";

type BadgeSize = "s" | "m" | "l";

type BadgeTheme = "normal" | "info" | "danger" | "warning" | "success";

export type BadgeProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: BadgeSize;
  theme?: BadgeTheme;
};

const block = cn("badge");

export const Badge: React.FC<BadgeProps> = (props) => {
  const { children, icon, size = "m", theme = "normal" } = props;

  return (
    <div className={block({ size, theme })}>
      {icon && <div className={block("icon")}>{icon}</div>}
      <div className={block("text")}>{children}</div>
    </div>
  );
};
