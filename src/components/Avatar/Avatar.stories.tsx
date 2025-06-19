import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  argTypes: {
    size: {
      options: ["xs", "s", "m", "l"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: "xs",
    // src: "https://loremflickr.com/320/240?random=3",
    text: "Asterix",
  },
};
