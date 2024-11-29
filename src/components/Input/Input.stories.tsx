import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

export default {
  component: Input,
  argTypes: {
    size: {
      options: ["s", "m"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    size: "m",
    disabled: false,
    hasClear: false,
  },
};
