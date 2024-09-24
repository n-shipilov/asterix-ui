import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Icon as IconComponent } from "../Icon";
import { SvgIcon } from "../SvgIcon";

export default {
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    disabled: false,
    selected: false,
    loading: false,
  },
  render: (args) => <Button {...args} />,
};

export const View: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Button view="primary" {...args} />
      <Button view="secondary" {...args} />
      <Button view="ghost" {...args} />
    </div>
  ),
};

export const Size: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Button size="s" {...args} />
      <Button size="m" {...args} />
    </div>
  ),
};

export const Icon: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Button {...args}>Button text</Button>
      <Button {...args}>
        <IconComponent data={SvgIcon} size={args.size === "s" ? "16px" : "20px"} />
        Button text
      </Button>
      <Button {...args}>
        Button text
        <IconComponent data={SvgIcon} size={args.size === "s" ? "16px" : "20px"} />
      </Button>
      <Button {...args}>
        <IconComponent data={SvgIcon} size={args.size === "s" ? "16px" : "20px"} />
      </Button>
    </div>
  ),
};
