import { useForm, FormProvider, DefaultValues, ValidationMode, useWatch } from "react-hook-form";
import { cn } from "../utils/cn";
import { Field } from "./Field";
import "./Form.scss";

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">;

export type FormProps<FieldValues> = BaseFormProps & {
  // TODO: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form?: any;
  defaultValues?: DefaultValues<FieldValues>;
  mode?: keyof ValidationMode;
  values?: FieldValues;
  onSubmit?: (data: FieldValues, event?: React.BaseSyntheticEvent) => void;
};

const block = cn("form");

export const Form = <FieldValues extends Record<string, unknown>>(
  props: FormProps<FieldValues>,
) => {
  const {
    children,
    className,
    form,
    defaultValues,
    mode = "all",
    values,
    onSubmit,
    ...attrs
  } = props;

  const methods = useForm<FieldValues>({
    defaultValues,
    mode,
    values,
  });

  const providerProps = form ?? methods;

  return (
    <FormProvider {...providerProps}>
      <form
        className={block({}, className)}
        onSubmit={onSubmit && methods.handleSubmit(onSubmit)}
        {...attrs}
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.Field = Field;
Form.useForm = useForm;
Form.useWatch = useWatch;
