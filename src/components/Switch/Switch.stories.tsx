import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

export default {
  component: Switch,
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: "Label",
    disabled: false,
    checked: false,
  },
};
