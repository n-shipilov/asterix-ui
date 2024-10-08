import React from "react";

import type { Decorator } from "@storybook/react";

import { ThemeProvider } from "../../src";

export const WithTheme: Decorator = (Story, context) => {
  return (
    <ThemeProvider theme={context.globals.theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};
