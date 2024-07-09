import { forwardRef } from "react";
import { cn } from "../utils/cn";
import "./Textarea.scss";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const textarea = cn("textarea");

export const Textarea: React.FC<TextareaProps> = forwardRef(
  (props, ref: React.Ref<HTMLTextAreaElement>) => {
    const { className, disabled, ...attrs } = props;

    return (
      <div className={textarea({ disabled }, className)}>
        <textarea
          className={textarea("control")}
          ref={ref}
          disabled={disabled}
          {...attrs}
        ></textarea>
      </div>
    );
  }
);
