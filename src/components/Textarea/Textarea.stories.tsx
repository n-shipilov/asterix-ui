import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

export default {
  component: Textarea,
} as Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    rows: 3,
    disabled: false,
  },
};
