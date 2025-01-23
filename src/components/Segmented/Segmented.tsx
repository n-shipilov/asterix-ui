import React, { forwardRef, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Item, SegmentedOption } from "./Item";
import "./Segmented.scss";

type SegmentedSize = "s" | "m";
type SegmentedWidth = "auto" | "max";

export type SegmentedProps = Omit<
  React.HTMLProps<HTMLInputElement>,
  "value" | "onChange" | "ref" | "size"
> & {
  value?: string;
  size?: SegmentedSize;
  width?: SegmentedWidth;
  options: SegmentedOption[];
  onChange?: (value: string) => void;
};

const block = cn("segmented");

export const Segmented: React.FC<SegmentedProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const { className, value, size = "m", width = "auto", options, disabled, onChange } = props;

    const plateRef = React.useRef<HTMLDivElement>(null);
    const optionRef = React.useRef<HTMLLabelElement>(null);

    const [currentValue, setCurrentValue] = useState(value ? value : options[0].value);

    useEffect(() => {
      setCurrentValue(value ? value : options[0].value);
    }, [options, value]);

    const optionItems = options.map((option) => ({
      ...option,
      disabled: disabled,
    }));

    const handleChange = (value: string) => {
      setCurrentValue(value);
      onChange?.(value);
    };

    const handlePlateTransitionEnd: React.TransitionEventHandler<HTMLDivElement> = (event) => {
      event.currentTarget.hidden = true;
    };

    const handleCheckedOptionMount: React.Ref<HTMLLabelElement> = React.useCallback(
      (checkedOptionNode: HTMLLabelElement | null) => {
        if (!checkedOptionNode) {
          return;
        }

        const plateNode = plateRef.current;

        if (!plateNode) {
          return;
        }

        const uncheckedOptionNode = optionRef.current;

        if (uncheckedOptionNode && uncheckedOptionNode !== checkedOptionNode) {
          const setPlateStyle = (node: HTMLElement) => {
            plateNode.style.left = `${node.offsetLeft}px`;
            plateNode.style.width = `${node.offsetWidth}px`;
          };

          setPlateStyle(uncheckedOptionNode);

          plateNode.hidden = false;

          setPlateStyle(checkedOptionNode);
        }

        optionRef.current = checkedOptionNode;
      },
      [],
    );

    return (
      <div className={block({ size, width, disabled }, className)} ref={ref}>
        <div
          ref={plateRef}
          className={block("plate")}
          onTransitionEnd={handlePlateTransitionEnd}
          hidden
        />
        {optionItems?.map((item, index) => (
          <Item
            option={item}
            key={index}
            checked={item.value === currentValue}
            ref={item.value === currentValue ? handleCheckedOptionMount : undefined}
            onChange={handleChange}
          />
        ))}
      </div>
    );
  },
);
