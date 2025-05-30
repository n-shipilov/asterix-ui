import { create } from "storybook/theming/create";

export const CloudThemeLight = create({
  base: "light",

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  brandTitle: `<div style="font-size: 18px; color: #4088FF; font-weight: 600;">Asterix UI</div>`,
  brandUrl: "",
  brandTarget: "_self",
});

export const CloudThemeDark = create({
  base: "dark",
});

export const themes = {
  light: CloudThemeLight,
  dark: CloudThemeDark,
};
