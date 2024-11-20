import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  component: Tabs,
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items: [
      { label: "Tab 1", content: "Content of Tab Pane 1" },
      { label: "Tab 2", content: "Content of Tab Pane 2" },
      { label: "Tab 3", content: "Content of Tab Pane 3", disabled: true },
    ],
  },
  render: (args) => <Tabs {...args} />,
};
