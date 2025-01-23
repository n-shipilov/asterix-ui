import { useEffect, useState } from "react";

type UseCheckboxProps = Pick<
  React.InputHTMLAttributes<HTMLInputElement>,
  | "name"
  | "value"
  | "id"
  | "defaultChecked"
  | "disabled"
  | "checked"
  | "onChange"
  | "onFocus"
  | "onBlur"
>;

export const useCheckbox = (props: UseCheckboxProps) => {
  const { name, value, id, defaultChecked, disabled, checked, onChange, onFocus, onBlur } = props;

  // Controlled state
  const [isChecked, setChecked] = useState(checked ?? defaultChecked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    if (onChange) {
      onChange(event);
    }
  };

  const inputProps: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement> = {
    name,
    value,
    id,
    type: "checkbox",
    checked: isChecked,
    defaultChecked,
    disabled,
    onFocus,
    onBlur,
    onChange: handleChange,
  };

  return { checked: isChecked, inputProps };
};
