import React from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeContextProps, ThemeProviderProps } from "./types";
import { cn } from "../utils/cn";

const block = cn("root");

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const parentThemeState = React.useContext(ThemeContext);
  const hasParentProvider = parentThemeState !== undefined;

  console.log("hasParentProvider", hasParentProvider);

  React.useLayoutEffect(() => {
    if (!hasParentProvider) {
      document.body.classList.add(block());
      document.body.classList.toggle("st-root_theme_light", theme === "light");
      document.body.classList.toggle("st-root_theme_dark", theme === "dark");
    }
  }, [theme, hasParentProvider]);

  const contextValue = React.useMemo(() => ({ theme }) as ThemeContextProps, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {hasParentProvider ? (
        <div
          className={block({
            theme,
          })}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
};
