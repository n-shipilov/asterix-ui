import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    // src: "https://loremflickr.com/320/240?random=3",
    text: "Asterix",
  },
};
