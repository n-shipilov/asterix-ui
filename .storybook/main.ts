import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/preset-scss", "@storybook/addon-essentials", "./theme-addon/register.tsx"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {},
  docs: {},
};
export default config;
