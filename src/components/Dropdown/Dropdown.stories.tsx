import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Dropdown } from "./Dropdown";
import { Icon } from "../Icon";
import { SvgIcon } from "../SvgIcon";

export default {
  component: Dropdown,
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: [
      {
        label: "React",
        value: 1,
      },
      {
        label: "Vue",
        value: 2,
      },
      {
        label: "Angular",
        value: 3,
      },
      {
        label: "Ember",
        value: 4,
      },
    ],
    open: true,
  },
  render: (args) => {
    return (
      <Dropdown {...args}>
        <Button view="secondary">
          <Icon data={SvgIcon} />
        </Button>
      </Dropdown>
    );
  },
};
