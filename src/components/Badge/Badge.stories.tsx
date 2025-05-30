import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

export default {
  component: Badge,
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};
