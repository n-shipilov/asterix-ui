import React, { cloneElement, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { DropdownOption, Option } from "./Option";
import { PlacementType, Popup } from "../Popup";
import "./Dropdown.scss";

export type DropdownProps = {
  children: React.ReactElement;
  placement?: PlacementType;
  options?: DropdownOption[];
  aligned?: boolean;
  open?: boolean;
  onOpenToggle?: (value: boolean) => void;
  onOptionSelect?: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    option: DropdownOption,
  ) => void;
};

const block = cn("dropdown");

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    children,
    options,
    placement = "bottom-start",
    aligned,
    open = false,
    onOpenToggle,
    onOptionSelect,
  } = props;

  const anchorRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(open);

  const handleOptionClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    option: DropdownOption,
  ) => {
    setVisible(false);
    onOpenToggle?.(false);
    onOptionSelect?.(event, option);
  };

  const handleChangeVisible = (value: boolean) => {
    setVisible(value);
    onOpenToggle?.(value);
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setVisible((prev) => !prev);
    }
  };

  return (
    <>
      {cloneElement(children, {
        ref: anchorRef,
        onClick: () => handleChangeVisible(visible ? false : true),
        onKeyUp: handleKeyUp,
      })}
      <Popup
        anchorRef={anchorRef}
        placement={placement}
        open={visible}
        onClose={() => handleChangeVisible(false)}
      >
        <div
          className={block()}
          style={{
            width: aligned ? anchorRef.current?.getBoundingClientRect().width : "",
          }}
        >
          <ul className={block("list")} role="listbox">
            {options?.map((option) => (
              <Option key={option.value} option={option} onClick={handleOptionClick} />
            ))}
          </ul>
        </div>
      </Popup>
    </>
  );
};
