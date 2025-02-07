import { useEffect } from "react";
import {
  autoUpdate,
  flip,
  offset as floatingOffset,
  shift,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  useTransitionStatus,
} from "@floating-ui/react";
import { cn } from "../utils/cn";
import { Portal } from "../Portal";
import { TRANSITION_DURATION } from "./consts";
import { PopupAnchorElement, PopupOffset, PopupPlacement } from "./types";
import "./Popup.scss";

export type PopupProps = {
  /** Элемент, относительно которого позиционируется всплывающее окно */
  anchorElement?: PopupAnchorElement | null;
  /** Содержимое всплывающего окна */
  children?: React.ReactNode;
  /** Расстояние от якоря до всплывающего окна */
  offset?: PopupOffset;
  /** Позиция всплывающего окна */
  placement?: PopupPlacement;
  /** Управляет видимостью `Popup` */
  open?: boolean;
  /** Callback для изменения состояния видимости */
  onOpenChange?: (open: boolean) => void;
};

const block = cn("popup");

export const Popup: React.FC<PopupProps> = (props) => {
  const { anchorElement, children, offset = 8, placement, open, onOpenChange } = props;

  const {
    refs,
    elements,
    floatingStyles,
    placement: floatingPlacement,
    context,
    update,
  } = useFloating({
    placement: placement,
    open,
    onOpenChange,
    middleware: [floatingOffset(offset), flip(), shift()],
  });

  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getFloatingProps } = useInteractions([dismiss, role]);

  const { isMounted, status } = useTransitionStatus(context, { duration: TRANSITION_DURATION });

  useEffect(() => {
    if (anchorElement) refs.setReference(anchorElement);
  }, [anchorElement, refs]);

  useEffect(() => {
    if (isMounted && elements.reference && elements.floating) {
      return autoUpdate(elements.reference, elements.floating, update);
    }
    return undefined;
  }, [isMounted, elements, update]);

  return (
    isMounted && (
      <Portal>
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          data-floating-ui-placement={floatingPlacement}
          data-floating-ui-status={status}
          {...getFloatingProps()}
        >
          <div className={block({ open: isMounted })}>{children}</div>
        </div>
      </Portal>
    )
  );
};
