import { ReactNode, forwardRef } from "react";
import { CloseIcon } from "../../CloseIcon";
import { Icon } from "../../Icon";
import { InfoIcon } from "../../InfoIcon";
import { cn } from "../../utils/cn";
import { useToasterContext } from "../ToasterProvider/ToasterProvider";
import { InternalToastProps, ToastType } from "../types";
import "./Toast.scss";
import { CloseCircleIcon } from "../../CloseCircleIcon";

const block = cn("toast");

const TITLE_ICONS: Record<ToastType, ReactNode> = {
  info: (
    <Icon data={InfoIcon} size={20} color="var(--st-color-brand-primary)" />
  ),
  success: (
    <Icon data={InfoIcon} size={20} color="var(--st-color-base-success)" />
  ),
  warning: (
    <Icon data={InfoIcon} size={20} color="var(--st-color-base-warning)" />
  ),
  error: (
    <Icon data={CloseCircleIcon} size={20} color="var(--st-color-base-error)" />
  ),
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
