import React from "react";
import { ThemeContext } from "./ThemeContext";

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);

  return context;
};
