import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";

export default {
  component: Tooltip,
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Tooltip {...args}>
      <span tabIndex={0}>Hover or focus me</span>
    </Tooltip>
  ),
};
