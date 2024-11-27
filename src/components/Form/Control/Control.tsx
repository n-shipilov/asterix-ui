import { cloneElement } from "react";
import {
  Control as ControlType,
  Controller,
  ControllerRenderProps,
  FieldError,
  FieldValues,
} from "react-hook-form";
import { Checkbox, Input, RadioGroup, Segmented, Select, Switch, Textarea } from "components";
import { FieldRule } from "../Field";

type ControlProps = {
  child: React.ReactElement;
  control: ControlType<FieldValues, any>;
  name?: string;
  rules?: FieldRule;
  error?: FieldError;
};

export const Control: React.FC<ControlProps> = (props) => {
  const { child, control, name, rules, error } = props;

  const getDefaultValue = (child: React.ReactElement) => {
    const { props, type } = child;
    if (type === Input || type === Textarea) {
      return "";
    }
    if (type === Checkbox || type === Switch) {
      return false;
    }
  };

  const renderedControl = ({ field }: { field: ControllerRenderProps<FieldValues, string> }) => {
    const { props } = child;
    switch (child.type) {
      case Input:
      case Textarea:
        return cloneElement(child, {
          ...props,
          ...field,
          value: props.value || field.value,
          error,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(event.target.value);
            return props.onChange && props.onChange(event);
          },
        });
      case Checkbox:
      case Switch:
        return cloneElement(child, {
          ...props,
          ...field,
          checked: props.checked || field.value,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(event.target.checked);
            return props.onChange && props.onChange(event);
          },
        });
      case RadioGroup:
        return cloneElement(child, {
          ...props,
          ...field,
          value: props.value || field.value,
          onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(event.target.value);
            return props.onChange && props.onChange(event);
          },
        });
      case Select:
        return cloneElement(child, {
          ...props,
          ...field,
          value: props.value || field.value,
          onChange: (event: any, option: any) => {
            field.onChange(option);
            return props.onChange && props.onChange(event, option);
          },
        });
      case Segmented:
        return cloneElement(child, {
          ...props,
          ...field,
          value: props.value || field.value,
          onChange: (value: string) => {
            field.onChange(value);
            return props.onChange && props.onChange(value);
          },
        });
      default:
        return child;
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
      render={renderedControl}
    />
  );
};
