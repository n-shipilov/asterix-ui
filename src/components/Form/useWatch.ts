import { Control, useWatch } from "react-hook-form";

export const useFormWatch = (control?: Control<any, any>) => {
  return useWatch({ control });
};
