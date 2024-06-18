import { Children, cloneElement, forwardRef, useState } from "react";
import { cn } from "../utils/cn";
import "./RadioGroup.scss";

type RadioGroupProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** The content of the radio group */
  children: React.ReactNode;
  /** Sets the direction of the radio group */
  direction?: "horizontal" | "vertical";
};

const radioGroup = cn("radio-group");

export const RadioGroup: React.FC<RadioGroupProps> = forwardRef(
  (props, ref: React.Ref<HTMLInputElement>) => {
    const {
      children,
      direction = "horizontal",
      value,
      onChange,
      ...attrs
    } = props;

    const [groupValue, setGroupValue] = useState(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setGroupValue(value);
      onChange && onChange(event);
    };

    return (
      <div
        className={radioGroup({
          direction,
        })}
        ref={ref}
        role="radiogroup"
        {...attrs}
      >
        {Children.map(children, (child: any) => {
          const { props } = child;
          return cloneElement(child, {
            value: props.value,
            checked: props.value === groupValue,
            onChange: handleChange,
            ...attrs,
          });
        })}
      </div>
    );
  }
);
