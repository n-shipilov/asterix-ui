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
        id: "1",
        label: "Menu item 1",
        link: "/1",
        icon: <SvgIcon />,
      },
      {
        id: "2",
        label: "Menu item 2",
        link: "/2",
        icon: <SvgIcon />,
      },
      {
        id: "3",
        label: "Menu item 3",
        link: "/3",
        icon: <SvgIcon />,
      },
      {
        id: "4",
        label: "Menu item 4",
        link: "/4",
        icon: <SvgIcon />,
      },
      {
        id: "5",
        label: "Menu item 5",
        icon: <SvgIcon />,
        children: [
          {
            id: "6",
            label: "Submenu item 1",
            link: "/6",
          },
          {
            id: "7",
            label: "Submenu item 2",
            link: "/7",
          },
        ],
      },
    ],
  },
  render: (args) => <Sidebar {...args} onItemClick={console.log} />,
};
