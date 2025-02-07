import "../styles/fonts.scss";
import "../styles/styles.scss";

import type { Preview } from "@storybook/react";
import { themes } from "./theme";
import { WithTheme } from "./decorators/withTheme";

const preview: Preview = {
  decorators: [WithTheme],

  parameters: {
    docs: {
      theme: themes.light,
    },
  },

  globalTypes: {
    theme: {
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "light", right: "☼", title: "Light" },
          { value: "dark", right: "☾", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
