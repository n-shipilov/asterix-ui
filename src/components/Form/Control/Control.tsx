import { cloneElement } from "react";
import { Control as ControlType, Controller, FieldValues } from "react-hook-form";
import { Checkbox, Input, RadioGroup, Select, Switch, Textarea } from "components";
import { FieldRule } from "../Field";

type ControlProps = {
  child: React.ReactElement;
  control: ControlType<FieldValues, any>;
  name?: string;
  rules?: FieldRule;
};

export const Control: React.FC<ControlProps> = (props) => {
  const { child, control, name, rules } = props;

  const getDefaultValue = (child: React.ReactElement) => {
    const { props, type } = child;
    if (type === Input || type === Textarea) {
      return "";
    }
    if (type === Checkbox || type === Switch) {
      return false;
    }
  };

  if (!name) {
    return child;
  }

  return (
    <Controller
      control={control}
      defaultValue={getDefaultValue(child)}
      name={name}
      rules={rules}
      render={({ field }) => {
        const { props } = child;
        switch (child.type) {
          case Input:
          case Textarea:
            return cloneElement(child, {
              ...props,
              ...field,
              value: props.value || field.value,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                props.onChange && props.onChange(event);
                field.onChange(event.target.value);
              },
            });
          case Checkbox:
          case Switch:
            return cloneElement(child, {
              ...props,
              ...field,
              checked: props.checked || field.value,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                props.onChange && props.onChange(event);
                field.onChange(event.target.checked);
              },
            });
          case RadioGroup:
            return cloneElement(child, {
              ...props,
              ...field,
              value: props.value || field.value,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                props.onChange && props.onChange(event);
                field.onChange(event.target.value);
              },
            });
          case Select:
            return cloneElement(child, {
              ...props,
              ...field,
              value: props.value || field.value,
              onChange: (event: any, option: any) => {
                props.onChange && props.onChange(event, option);
                field.onChange(option);
              },
            });
          default:
            return child;
        }
      }}
    />
  );
};
