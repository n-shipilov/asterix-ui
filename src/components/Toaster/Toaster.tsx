import { FC } from "react";
import { Portal } from "../Portal";
import { ToastList } from "./ToastList";

export const Toaster: FC = () => {
  return (
    <Portal>
      <ToastList />
    </Portal>
  );
};
