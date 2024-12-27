import { useForm, FormProvider, DefaultValues, ValidationMode } from "react-hook-form";
import { cn } from "../utils/cn";
import { Field } from "./Field";
import { useFormWatch } from "./useWatch";
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

  useFormWatch(methods.control);

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
Form.useForm = useForm;
Form.useWatch = useFormWatch;
