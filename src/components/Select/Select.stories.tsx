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
        label: "React",
        value: 1,
      },
      {
        label: "Vue",
        value: 2,
      },
      {
        label: "Angular",
        value: 3,
      },
      {
        label: "Ember",
        value: 4,
      },
    ],
  },
  render: (args) => {
    return <Select {...args} />;
  },
};
