import React from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
};

export const Portal: React.FC<PortalProps> = (props) => {
  const { children } = props;

  return createPortal(children, document.body);
};
