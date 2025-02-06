import {
  Placement,
  useFloating,
  offset as floatingOffset,
  VirtualElement,
} from "@floating-ui/react";
import { cn } from "../utils/cn";
import { Portal } from "../Portal";
import "./Popup.scss";
import { useEffect } from "react";

export type PopupAnchorElement = Element | VirtualElement;

type OffsetOptions =
  | number
  | {
      mainAxis?: number;
      crossAxis?: number;
      alignmentAxis?: number | null;
    };

export type PopupProps = {
  /** Элемент, относительно которого позиционируется всплывающее окно */
  anchorElement?: PopupAnchorElement | null;
  /** Содержимое всплывающего окна */
  children?: React.ReactNode;
  /** Расстояние от якоря до всплывающего окна */
  offset?: OffsetOptions;
  /** Позиция всплывающего окна */
  placement?: Placement;
  /** Управляет видимостью `Popup` */
  open?: boolean;
  /** Callback для изменения состояния видимость */
  onOpenChange?: (open: boolean, event?: Event) => void;
};

const block = cn("popup");

export const Popup: React.FC<PopupProps> = (props) => {
  const { anchorElement, children, offset, placement, open, onOpenChange } = props;

  const { refs, floatingStyles } = useFloating({
    placement,
    open,
    onOpenChange: onOpenChange,
    middleware: [floatingOffset(offset)],
  });

  useEffect(() => {
    if (anchorElement) refs.setReference(anchorElement);
  }, [anchorElement, refs]);

  return (
    <Portal>
      <div ref={refs.setFloating} style={floatingStyles} className={block({ open })}>
        <div className={block("content")}>{children}</div>
      </div>
    </Portal>
  );
};
