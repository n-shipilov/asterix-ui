import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { usePopper } from "react-popper";
import { useForkRef, useOutsideClick } from "../../hooks";
import { cn } from "../utils/cn";
import { Portal } from "../Portal";
import "./Popup.scss";

export type PlacementType =
  | "top-start"
  | "top"
  | "top-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "right-start"
  | "right"
  | "right-end"
  | "left-start"
  | "left"
  | "left-end";

export type PopupProps = {
  /** Элемент, относительно которого позиционируется всплывающее окно */
  anchorRef: React.RefObject<HTMLElement>;
  /** Содержимое всплывающего окна */
  children?: React.ReactNode;
  /** Расстояние от якоря до всплывающего окна */
  offset?: [number, number];
  /** Позиция всплывающего окна */
  placement?: PlacementType;
  /** Видимость всплывающего окна */
  open?: boolean;
  /** Обработчик, вызывающийся после нажатия мышкой на область вне контейнера */
  onClose?: () => void;
};

const popup = cn("popup");

export const Popup: React.FC<PopupProps> = (props) => {
  const { anchorRef, children, offset = [0, 8], placement, open, onClose } = props;

  const containerRef = useRef<HTMLDivElement>(null);

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const handleRef = useForkRef<HTMLDivElement>(setPopperElement, containerRef);

  const { attributes, styles } = usePopper(anchorRef?.current, popperElement, {
    modifiers: [{ name: "offset", options: { offset } }],
    placement,
  });

  useOutsideClick([containerRef, anchorRef], onClose);

  return (
    <Portal>
      <CSSTransition
        nodeRef={containerRef}
        in={open}
        addEndListener={(done) => containerRef.current?.addEventListener("animationend", done)}
        classNames={popup()}
        mountOnEnter
        unmountOnExit
        appear={true}
      >
        <div
          ref={handleRef}
          style={styles.popper}
          {...attributes.popper}
          className={popup({ open })}
        >
          <div className={popup("content")}>{children}</div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
