import { Dispatch } from "react";

export type ThemeType = "light" | "dark";

export type ThemeContextProps = {
  theme: ThemeType;
  setTheme?: Dispatch<React.SetStateAction<ThemeType>>;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  theme: ThemeType;
};
