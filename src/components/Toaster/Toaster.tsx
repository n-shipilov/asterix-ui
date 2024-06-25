import { FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Portal } from "../Portal";
import { cn } from "../utils/cn";
import { useToasterContext } from "./ToasterProvider/ToasterProvider";
import { Toast } from "./Toast";
import "./Toaster.scss";

const block = cn("toast-list");

export const Toaster: FC = () => {
  const { toasts } = useToasterContext();
  return (
    <Portal>
      <div className={block()}>
        <TransitionGroup component={null}>
          {toasts?.map((toast) => {
            return (
              <CSSTransition
                key={toast.id}
                nodeRef={toast.ref}
                timeout={300}
                classNames="item"
              >
                <Toast {...toast} key={toast.id} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </Portal>
  );
};
