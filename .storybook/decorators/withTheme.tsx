import React from "react";

import type { Decorator } from "@storybook/react-vite";

import { ThemeProvider } from "../../src";

export const WithTheme: Decorator = (Story, context) => {
  return (
    <ThemeProvider theme={context.globals.theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
