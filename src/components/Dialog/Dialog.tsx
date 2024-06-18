import React, { useEffect, useLayoutEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { cn } from "../utils/cn";
import { Portal } from "../Portal";
import { Button } from "../Button";
import { Icon } from "../Icon";
import "./Dialog.scss";
import { CloseIcon } from "../CloseIcon";

type DialogProps = {
  children?: React.ReactNode;
  size: "s" | "m" | "l";
  title?: string;
  open?: boolean;
  onClose?: () => void;
};

const dialog = cn("dialog");
const overlay = cn("dialog-overlay");

export const Dialog: React.FC<DialogProps> = (props) => {
  const { children, size = "s", title = "Dialog title", open, onClose } = props;

  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.removeAttribute("style");
    };
  }, [open]);

  useEffect(() => {
    window.addEventListener("keydown", handleClickEsc);
    return () => window.removeEventListener("keydown", handleClickEsc);
  }, []);

  const handleClickEsc = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose && onClose();
    }
  };

  const handleOutsideClick = () => {
    onClose && onClose();
  };

  return (
    <Portal>
      <CSSTransition
        classNames={overlay()}
        in={open}
        timeout={160}
        mountOnEnter
        unmountOnExit
      >
        <div className={overlay()} onClick={handleOutsideClick}>
          <div
            className={dialog({ size })}
            role="dialog"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={dialog("header")}>
              <h2 className={dialog("title")}>{title}</h2>
              <Button
                className={dialog("btn-close")}
                view="ghost"
                onClick={onClose}
              >
                <Icon data={CloseIcon} />
              </Button>
            </div>
            <div className={dialog("content")}>{children}</div>
            <div className={dialog("footer")}>
              <Button view="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button>Do something</Button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
