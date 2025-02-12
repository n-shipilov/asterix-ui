import React, { forwardRef, useEffect, useRef, useState } from "react";
import { ChevronBottom } from "../ChevronBottom";
import { Icon } from "../Icon";
import { Popup } from "../Popup";
import { cn } from "../utils/cn";
import "./Select.scss";

type BaseSelectProps = Omit<
  React.InputHTMLAttributes<HTMLDivElement>,
  "value" | "onChange" | "size"
>;

type SelectSize = "s" | "m";

type SelectOption = {
  label?: string;
  value: string | number;
};

export type SelectProps = BaseSelectProps & {
  size?: SelectSize;
  options?: SelectOption[];
  value?: SelectOption;
  searchable?: boolean;
  onChange?: (
    event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>,
    option: SelectOption,
  ) => void;
};

const select = cn("select");

export const Select: React.FC<SelectProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const {
      className,
      placeholder = "Select option",
      size = "m",
      options,
      value,
      disabled,
      searchable,
      onChange,
      ...attrs
    } = props;

    const [controlElement, setControlElement] = useState<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [open, setOpen] = useState(false);
    const [selectValue, setSelectValue] = useState(value);
    const [searchValue, setSearchValue] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(-1);

    useEffect(() => {
      setSelectValue(value);
    }, [value]);

    const handleOpenChange = () => {
      setOpen((prev) => !prev);
      inputRef.current?.focus();
    };

    const handleOptionSelect = (
      event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent<HTMLElement>,
      option: SelectOption,
    ) => {
      setSelectValue(option);
      setOpen(false);
      setSearchValue("");
      return onChange && onChange(event, option);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      switch (event.key) {
        case "Enter":
          if (open && selectedIndex !== -1) {
            handleOptionSelect(event, options![selectedIndex]);
            setOpen(false);
          } else {
            handleOpenChange();
          }
          break;
        case "ArrowDown":
          setSelectedIndex((prevIndex) => (prevIndex + 1) % options!.length);
          break;
        case "ArrowUp":
          setSelectedIndex((prevIndex) => (prevIndex - 1 + options!.length) % options!.length);
          break;
        case "Escape":
          setOpen(false);
          break;
        case "Tab":
          setOpen(false);
          break;
        default:
          break;
      }
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
          className={select({ disabled, searchable, size, open }, className)}
          ref={setControlElement}
          onClick={!disabled ? handleOpenChange : undefined}
          onKeyDown={handleKeyDown}
          {...attrs}
        >
          <div className={select("control")} role="group" ref={ref}>
            {!searchValue &&
              (selectValue ? (
                <span className={select("value", { unactive: open, disabled })}>
                  {selectValue.label}
                </span>
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
          <div className={select("toggle", { disabled })}>
            <Icon
              data={ChevronBottom}
              size={16}
              style={{ transform: open ? "rotate(180deg)" : "" }}
            />
          </div>
        </div>
        <Popup
          anchorElement={controlElement}
          placement="bottom-start"
          open={open}
          onOpenChange={() => setOpen(false)}
        >
          <div
            className={select("popup")}
            style={{ width: controlElement?.getBoundingClientRect().width }}
          >
            {filteredOptions && filteredOptions.length > 0 ? (
              <ul className={select("items")} role="listbox">
                {filteredOptions?.map((option, index) => (
                  <li
                    className={select("item", {
                      selected: option?.value === selectValue?.value,
                    })}
                    key={option.value}
                    onClick={(event) => handleOptionSelect(event, option)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    role="option"
                    aria-selected={selectedIndex === index}
                  >
                    <span className={select("item-title")}>{option.label}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={select("empty")}>По запросу «{searchValue}» ничего не найдено</p>
            )}
          </div>
        </Popup>
      </>
    );
  },
);
