import React from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextProps, ThemeProviderProps } from "./types";
import { cn } from "../utils/cn";

const block = cn("root");

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  document.body.classList.add(block());

  React.useLayoutEffect(() => {
    document.body.classList.toggle("st-root_theme_light", theme === "light");
    document.body.classList.toggle("st-root_theme_dark", theme === "dark");
  }, [theme]);

  const contextValue = React.useMemo(() => ({ theme }) as ThemeContextProps, [theme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
