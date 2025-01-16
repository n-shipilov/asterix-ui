import { forwardRef } from "react";
import { cn } from "../utils/cn";
import "./Textarea.scss";

type BaseTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;

type TextareaSize = "s" | "m";

export type TextareaProps = BaseTextareaProps & {
  size?: TextareaSize;
};

const block = cn("textarea");

export const Textarea: React.FC<TextareaProps> = forwardRef(
  (props, ref: React.Ref<HTMLTextAreaElement>) => {
    const { className, disabled, size = "m", ...attrs } = props;

    return (
      <div className={block({ size, disabled }, className)}>
        <textarea className={block("control")} ref={ref} disabled={disabled} {...attrs}></textarea>
      </div>
    );
  },
);
