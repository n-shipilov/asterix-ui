import { createContext, useContext, useState } from "react";
import { InternalToastProps, ToastContext, ToastProps } from "../types";

type Props = React.PropsWithChildren;

const DEFAULT_TIMEOUT = 5000;

export const ToasterContext = createContext({});

export const ToasterProvider = (props: Props) => {
  const { children } = props;

  const [toasts, setToasts] = useState<InternalToastProps[]>([]);

  const add = (toast: ToastProps) => {
    const newToast: InternalToastProps = {
      ...toast,
      id: Date.now(),
      ref: { current: null },
    };

    setToasts((prev) => [...prev, newToast]);

    const timer = setTimeout(() => {
      remove(newToast.id);
    }, DEFAULT_TIMEOUT);

    return () => clearTimeout(timer);
  };

  const remove = (id: number) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  const context = {
    toasts,
    add,
    remove,
  };

  return <ToasterContext.Provider value={context}>{children}</ToasterContext.Provider>;
};

export const useToasterContext = (): ToastContext => {
  const context = useContext(ToasterContext) as ToastContext;

  return context;
};
