import { FieldError, Message, ValidationRule, useFormContext } from "react-hook-form";
import { cn } from "../../utils/cn";
import { Control } from "../Control";
import "./Field.scss";

export type FieldRule = {
  required?: Message | ValidationRule<boolean>;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  min?: ValidationRule<number>;
  max?: ValidationRule<number>;
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
  } = useFormContext();

  return (
    <div className={field()}>
      {label && (
        <label className={field("label")}>
          {label}
          {rules?.required && <span className={field("required-mark")}>*</span>}
        </label>
      )}
      {children && (
        <Control
          child={children}
          name={name}
          rules={rules}
          error={name ? (errors[name] as FieldError) : undefined}
        />
      )}
      {name && errors[name] && (
        <span className={field("error")}>{errors[name]?.message as string}</span>
      )}
    </div>
  );
};
