import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { SvgIcon } from "../SvgIcon";

export default {
  component: Sidebar,
} as Meta<typeof Sidebar>;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Menu item",
        link: "/",
        icon: <SvgIcon />,
      },
    ],
  },
  render: (args) => <Sidebar {...args} />,
};
