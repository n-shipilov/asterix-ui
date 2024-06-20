import { FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { cn } from "../../utils/cn";
import { Toast, useToasterContext } from "../Toast";
import "./ToastList.scss";

const block = cn("toast-list");

export const ToastList: FC = () => {
  const { toasts } = useToasterContext();

  return (
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
  );
};
