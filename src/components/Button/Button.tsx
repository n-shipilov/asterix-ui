import React, { useRef } from "react";
import { cn } from "../utils/cn";
import "./Button.scss";

export type ButtonSize = "s" | "m";

export type ButtonView = "primary" | "secondary" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Размер кнопки */
  size?: ButtonSize;
  /** Вид кнопки */
  view?: ButtonView;
  /** Состояние */
  disabled?: boolean;
  /** Состояние загрузки */
  loading?: boolean;
};

const button = cn("button");

export const Button: React.FC<ButtonProps> = React.forwardRef(
  (props, ref: React.Ref<HTMLButtonElement>) => {
    const {
      className,
      children = "Button text",
      size = "m",
      type = "button",
      view = "primary",
      disabled,
      loading,
      ...attrs
    } = props;

    const buttonRef = useRef<HTMLButtonElement>(null);

    const additionalClasses = button(
      {
        size,
        view,
        disabled: disabled || loading,
        loading,
      },
      className
    );

    const preparedChildren = (children: React.ReactNode) => {
      const items = React.Children.toArray(children);

      if (items.length === 1) {
        const onlyItem = items[0];

        if (typeof onlyItem === "string" || typeof onlyItem === "number") {
          return <span className={button("text")}>{onlyItem}</span>;
        } else {
          return <span className={button("icon")}>{onlyItem}</span>;
        }
      } else {
        if (typeof items[0] === "string" || typeof items[0] === "number") {
          return (
            <>
              <span className={button("text")}>{items[0]}</span>
              <span className={button("icon")}>{items[1]}</span>
            </>
          );
        }
        return (
          <>
            <span className={button("icon")}>{items[0]}</span>
            <span className={button("text")}>{items[1]}</span>
          </>
        );
      }
    };

    return (
      <button
        ref={ref || buttonRef}
        className={additionalClasses}
        disabled={disabled || loading}
        {...attrs}
      >
        {preparedChildren(children)}
      </button>
    );
  }
);
