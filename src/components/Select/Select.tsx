import React, { forwardRef, useRef, useState } from "react";
import { ChevronBottom } from "../ChevronBottom";
import { DropdownOption } from "../Dropdown/Option";
import { Icon } from "../Icon";
import { Popup } from "../Popup";
import { cn } from "../utils/cn";
import "./Select.scss";

type SelectOption = {
  key: React.Key;
  label?: string;
};

type BaseSelectProps = Omit<React.InputHTMLAttributes<HTMLDivElement>, "value" | "onChange">;

export type SelectProps = BaseSelectProps & {
  options?: SelectOption[];
  value?: SelectOption;
  searchable?: boolean;
  onChange?: (event: React.MouseEvent<HTMLElement, MouseEvent>, option: SelectOption) => void;
};

const select = cn("select");

export const Select: React.FC<SelectProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const {
      className,
      placeholder = "Select option",
      options,
      value,
      disabled,
      searchable,
      onChange,
      ...attrs
    } = props;

    const controlRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [open, setOpen] = useState(false);
    const [selectValue, setSelectValue] = useState(value);
    const [searchValue, setSearchValue] = useState("");

    const handleOpenChange = () => {
      setOpen((prev) => !prev);
    };

    const handleOptionSelect = (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
      option: DropdownOption,
    ) => {
      const { icon, disabled, ...selectOption } = option;
      setSelectValue(selectOption);
      setSearchValue("");
      setOpen(false);
      onChange && onChange(event, selectOption);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearchValue(value);
      setOpen(true);
    };

    const filteredOptions = options?.filter((option) =>
      option.label?.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (
      <>
        <div
          className={select({ disabled, searchable }, className)}
          ref={controlRef}
          onClick={handleOpenChange}
          {...attrs}
        >
          <div className={select("control")} role="group" ref={ref}>
            {!searchValue &&
              (selectValue ? (
                <span className={select("value")}>{selectValue.label}</span>
              ) : (
                <span className={select("placeholder")}>{placeholder}</span>
              ))}
            {searchable && (
              <input
                ref={inputRef}
                className={select("input")}
                value={searchValue}
                onChange={handleInputChange}
              ></input>
            )}
          </div>
          <div className={select("toggle")}>
            <Icon
              data={ChevronBottom}
              fill="var(--st-color-text-primary)"
              size={16}
              style={{ transform: open ? "rotate(180deg)" : "" }}
            />
          </div>
        </div>
        <Popup
          anchorRef={controlRef}
          placement="bottom-start"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div
            className={select("popup")}
            style={{ width: controlRef.current?.getBoundingClientRect().width }}
          >
            <ul className={select("items")} role="listbox">
              {filteredOptions?.map((option) => (
                <li
                  className={select("item", {
                    selected: option?.key === selectValue?.key,
                  })}
                  key={option.key}
                  onClick={(event) => handleOptionSelect(event, option)}
                >
                  <span className={select("item-title")}>{option.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Popup>
      </>
    );
  },
);
