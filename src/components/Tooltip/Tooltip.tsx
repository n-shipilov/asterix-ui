import React, { cloneElement, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { PlacementType, Popup } from "../Popup";
import "./Tooltip.scss";

type TooltipDelayProps = {
  openDelay?: number;
  closeDelay?: number;
};

export type TooltipProps = TooltipDelayProps & {
  children: React.ReactElement;
  /** Положение тултипа */
  placement?: PlacementType;
  /** Текст */
  text?: string;
  offset?: [number, number];
};

const tooltip = cn("tooltip");

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    placement = "bottom",
    text = "Tooltip text",
    offset,
    openDelay = 0,
    closeDelay = 0,
  } = props;

  const anchorRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<number>();

  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setVisible(true), openDelay);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setVisible(false), closeDelay);
  };

  return (
    <>
      {cloneElement(children, {
        ref: anchorRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onFocus: () => setVisible(true),
        onBlur: () => setVisible(false),
      })}
      <Popup
        anchorRef={anchorRef}
        placement={placement}
        open={visible}
        offset={offset}
      >
        <div className={tooltip()}>{text}</div>
      </Popup>
    </>
  );
};
