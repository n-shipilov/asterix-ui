import type { Meta, StoryObj } from "@storybook/react";
import { Portal } from "./Portal";

export default {
  component: Portal,
} as Meta<typeof Portal>;

type Story = StoryObj<typeof Portal>;

export const Default: Story = {
  args: {},
  render: () => <Portal>This is rendered inside document.body</Portal>,
};
