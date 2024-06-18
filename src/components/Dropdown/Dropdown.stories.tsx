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
        key: 1,
        label: "React",
      },
      {
        key: 2,
        label: "Vue",
      },
      {
        key: 3,
        label: "Angular",
      },
      {
        key: 4,
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
