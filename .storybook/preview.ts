import "../styles/fonts.scss";
import "../styles/styles.scss";

import type { Preview } from "@storybook/react";
import { themes } from "./theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
  },
};

export default preview;
