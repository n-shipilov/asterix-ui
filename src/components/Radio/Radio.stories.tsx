import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "./Radio";

export default {
  component: Radio,
} as Meta<typeof Radio>;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: "Label",
    disabled: false,
    checked: false,
  },
};
