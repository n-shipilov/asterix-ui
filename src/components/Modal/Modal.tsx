import React from "react";
import {
  FloatingOverlay,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTransitionStatus,
} from "@floating-ui/react";
import { cn } from "../utils/cn";
import { Portal } from "../Portal";
import "./Modal.scss";

export type ModalProps = {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const block = cn("modal");

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, open, onOpenChange } = props;

  const { refs, context } = useFloating({
    open,
    onOpenChange,
  });

  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "dialog" });

  const { getFloatingProps } = useInteractions([dismiss, role]);

  const { isMounted, status } = useTransitionStatus(context);

  return (
    isMounted && (
      <Portal>
        <FloatingOverlay className={block({ open })} data-floating-ui-status={status} lockScroll>
          <div className={block("content")} ref={refs.setFloating} {...getFloatingProps()}>
            {children}
          </div>
        </FloatingOverlay>
      </Portal>
    )
  );
};
