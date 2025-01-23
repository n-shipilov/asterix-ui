import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Dropdown } from "./Dropdown";
import { Icon as IconComponent } from "../Icon";
import { SvgIcon } from "../SvgIcon";

export default {
  component: Dropdown,
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: [
      {
        value: 1,
        label: "React",
      },
      {
        value: 2,
        label: "Vue",
      },
      {
        value: 3,
        label: "Angular",
      },
      {
        value: 4,
        label: "Ember",
      },
    ],
    open: true,
  },
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Button view="secondary">
          <IconComponent data={SvgIcon} />
        </Button>
      </Dropdown>
    );
  },
};
