import React from "react";
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
        label: "Menu item 1",
        link: "/1",
        icon: <SvgIcon />,
        onItemClick: console.log,
      },
      {
        label: "Menu item 2",
        link: "/2",
        icon: <SvgIcon />,
      },
      {
        label: "Menu item 3",
        link: "/3",
        icon: <SvgIcon />,
      },
      {
        label: "Menu item 4",
        link: "/4",
        icon: <SvgIcon />,
      },
      {
        label: "Menu item 5",
        icon: <SvgIcon />,
        children: [
          {
            label: "Submenu item 1",
            link: "/6",
          },
          {
            label: "Submenu item 2",
            link: "/7",
          },
        ],
      },
    ],
  },
  render: (args) => <Sidebar {...args} />,
};
