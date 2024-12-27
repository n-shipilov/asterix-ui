import { useForm, FormProvider, DefaultValues, ValidationMode, useWatch } from "react-hook-form";
import { cn } from "../utils/cn";
import { Field } from "./Field";
import "./Form.scss";

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export type FormProps<FieldValues> = BaseFormProps & {
  defaultValues?: DefaultValues<FieldValues>;
  mode?: keyof ValidationMode;
  values?: FieldValues;
  onSubmit?: (data: FieldValues, event?: React.BaseSyntheticEvent) => void;
};

const form = cn("form");

export const Form = <FieldValues extends Record<string, unknown>>(
  props: FormProps<FieldValues>,
) => {
  const { children, className, defaultValues, mode = "all", values, onSubmit, ...attrs } = props;

  const methods = useForm<FieldValues>({
    defaultValues,
    mode,
    values,
  });

  return (
    <FormProvider {...methods}>
      <form
        className={form({}, className)}
        onSubmit={onSubmit && methods.handleSubmit(onSubmit)}
        {...attrs}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export const useCustomWatch = (control: any) => useWatch({ control });

Form.Field = Field;
Form.useForm = useForm;
Form.useWatch = useWatch;
