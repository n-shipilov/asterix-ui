import React, { useRef } from "react";
import { cn } from "../utils/cn";
import { Icon } from "../Icon";
import "./Button.scss";

type ButtonSize = "s" | "m";

type ButtonView = "primary" | "secondary" | "ghost";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  view?: ButtonView;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
};

const button = cn("button");

export const Button: React.FC<ButtonProps> = React.forwardRef(
  (props, ref: React.Ref<HTMLButtonElement>) => {
    const {
      className,
      children = "Button text",
      size = "m",
      view = "primary",
      disabled,
      loading,
      selected,
      ...attrs
    } = props;

    const buttonRef = useRef<HTMLButtonElement>(null);

    const additionalClasses = button(
      {
        size,
        view,
        disabled: disabled || loading,
        loading,
        selected,
      },
      className,
    );

    const preparedChildren = (children: React.ReactNode) => {
      const items = React.Children.toArray(children) as React.ReactElement[];

      if (items.length === 1) {
        const oneChildElement = items[0];

        if (oneChildElement.type === Icon) {
          return <span className={button("icon")}>{oneChildElement}</span>;
        } else {
          return <span className={button("text")}>{oneChildElement}</span>;
        }
      } else {
        if (items[1].type === Icon) {
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
  },
);
