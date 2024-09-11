import { cloneElement } from "react";
import { Controller, Message, ValidationRule, useFormContext } from "react-hook-form";
import { Checkbox, Input, RadioGroup, Select, Switch, Textarea } from "components";
import { cn } from "../../utils/cn";
import "./Field.scss";

type FieldRule = {
  required?: Message | ValidationRule<boolean>;
  pattern?: ValidationRule<RegExp>;
};

type FieldProps = {
  children?: React.ReactElement;
  label?: string;
  name?: string;
  rules?: FieldRule;
};

const field = cn("form-field");

export const Field: React.FC<FieldProps> = (props) => {
  const { children, label, name, rules } = props;

  const {
    formState: { errors },
    control,
  } = useFormContext();

  const getDefaultValue = (child: React.ReactElement) => {
    const { props, type } = child;
    if (type === Input || type === Textarea) {
      return "";
    }
    if (type === Checkbox || type === Switch) {
      return false;
    }
  };

  const controlledComponent = (child: React.ReactElement) => {
    if (name) {
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
    }
    return child;
  };

  return (
    <div className={field()}>
      {label && (
        <label className={field("label")}>
          {label}
          {rules?.required && <span className={field("required-mark")}>*</span>}
        </label>
      )}
      {children && controlledComponent(children)}
      {name && errors[name] && (
        <span className={field("error")}>{errors[name]?.message as string}</span>
      )}
    </div>
  );
};
