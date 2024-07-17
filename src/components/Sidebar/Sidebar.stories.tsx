import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { SvgIcon } from "../SvgIcon";
import { MemoryRouter } from "react-router-dom";

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
        link: "/5",
        icon: <SvgIcon />,
      },
    ],
  },
  render: (args) => (
    <MemoryRouter>
      <Sidebar {...args} />
    </MemoryRouter>
  ),
};
