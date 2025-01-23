import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

export default {
  component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: "Select option",
    disabled: false,
    size: "m",
    options: [
      {
        value: 1,
        label: "React",
      },
      {
        value: 2,
        label: "Vue",
      },
      {
        value: 3,
        label: "Angular",
      },
      {
        value: 4,
        label: "Ember",
      },
    ],
  },
  render: (args) => {
    return <Select {...args} />;
  },
};
