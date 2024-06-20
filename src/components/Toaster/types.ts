export type ToastType = "info" | "error" | "warning" | "success";

export interface ToastProps {
  content?: React.ReactNode;
  title?: string;
  type?: ToastType;
}

export type InternalToastProps = ToastProps & {
  id: number;
  ref?: React.RefObject<HTMLDivElement>;
};

export type ToastContext = {
  toasts?: InternalToastProps[];
  add: (toast: ToastProps) => void;
  remove: (addedAt?: number) => void;
};
