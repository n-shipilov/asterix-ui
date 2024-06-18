import React, { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import "./Avatar.scss";

type AvatarSize = "xs" | "s" | "m" | "l";

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  size?: AvatarSize;
  text?: string;
};

const block = cn("avatar");

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, src, size = "xs", text } = props;

  const getAvatarDisplayText = (text?: string) => {
    if (text) {
      const words = text.split(" ");
      const result =
        words.length > 1
          ? [words[0][0], words[1][0]].filter(Boolean).join("")
          : text.slice(0, 2);

      return result.toUpperCase();
    }
    return "";
  };

  const displayText = getAvatarDisplayText(text);

  return (
    <div className={block({ size }, className)}>
      {src ? (
        <img src={src} alt="" />
      ) : (
        <div className={block("initials")}>{displayText}</div>
      )}
    </div>
  );
};
