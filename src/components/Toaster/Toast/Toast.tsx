import { ReactNode, forwardRef } from "react";
import { CloseIcon } from "../../CloseIcon";
import { Icon } from "../../Icon";
import { SvgIcon } from "../../SvgIcon";
import { cn } from "../../utils/cn";
import { useToasterContext } from "../ToasterProvider/ToasterProvider";
import { InternalToastProps, ToastType } from "../types";
import "./Toast.scss";

const block = cn("toast");

const TITLE_ICONS: Record<ToastType, ReactNode> = {
  info: <Icon data={SvgIcon} size={20} color="#FF668B" />,
  success: <Icon data={SvgIcon} size={20} color="#FF668B" />,
  warning: <Icon data={SvgIcon} size={20} color="#FF668B" />,
  error: <Icon data={SvgIcon} size={20} color="#FF668B" />,
};

export const Toast = forwardRef<HTMLDivElement, InternalToastProps>(
  (props, ref) => {
    const { content, title, type, id } = props;

    const { remove } = useToasterContext();

    const onClose = () => remove(id);

    const renderIconByType = (type?: ToastType) => {
      if (!type) {
        return null;
      }

      return TITLE_ICONS[type];
    };

    return (
      <div className={block({ type })} ref={ref}>
        <div className={block("icon")}>{renderIconByType(type)}</div>
        {title && <div className={block("title")}>{title}</div>}
        {content && <div className={block("content")}>{content}</div>}
        <button className={block("btn-close")} onClick={onClose}>
          <Icon data={CloseIcon} size={16} />
        </button>
      </div>
    );
  }
);
