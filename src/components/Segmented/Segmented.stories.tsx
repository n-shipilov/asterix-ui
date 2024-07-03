import type { Meta, StoryObj } from "@storybook/react";
import { Segmented } from "./Segmented";

export default {
  component: Segmented,
} as Meta<typeof Segmented>;

type Story = StoryObj<typeof Segmented>;

export const Default: Story = {
  args: {
    options: [
      {
        label: "Value 1",
        value: "Value 1",
      },
      {
        label: "Value 2",
        value: "Value 2",
      },
      {
        label: "Value 3",
        value: "Value 3",
      },
    ],
    onChange: console.log,
  },
};
