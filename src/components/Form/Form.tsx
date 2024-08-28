import { useForm, FormProvider, DefaultValues, ValidationMode } from "react-hook-form";
import { cn } from "../utils/cn";
import { Field } from "./Field";
import "./Form.scss";

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export type FormProps<FieldValues> = BaseFormProps & {
  defaultValues?: DefaultValues<FieldValues>;
  mode?: keyof ValidationMode;
  onSubmit?: (data: FieldValues, event?: React.BaseSyntheticEvent) => void;
};

const form = cn("form");

export const Form = <FieldValues extends Record<string, any>>(props: FormProps<FieldValues>) => {
  const { children, className, defaultValues, mode = "all", onSubmit, ...attrs } = props;

  const methods = useForm<FieldValues>({
    defaultValues,
    mode,
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

Form.Field = Field;
