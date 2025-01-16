import React, { useEffect } from "react";

export const useOutsideClick = (
  refs: Array<React.RefObject<HTMLElement | null>>,
  onClose?: () => void,
) => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleClickEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleClickEsc);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (refs.every((ref) => ref.current && !ref.current.contains(event.target as Element))) {
      onClose?.();
    }
  };

  const handleClickEsc = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose?.();
    }
  };
};
