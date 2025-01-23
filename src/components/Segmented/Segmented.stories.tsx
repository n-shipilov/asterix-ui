import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Segmented } from "./Segmented";
import { Icon as IconComponent } from "../Icon";
import { SvgIcon } from "../SvgIcon";

export default {
  component: Segmented,
} as Meta<typeof Segmented>;

const options = [
  {
    label: "Value 1",
    value: "Value 1",
  },
  {
    label: "Value 2",
    value: "Value 2",
  },
  {
    label: "Value 3",
    value: "Value 3",
  },
];

const optionsWithIcons = [
  {
    label: <IconComponent data={SvgIcon} size={16}></IconComponent>,
    value: "Value 1",
  },
  {
    label: <IconComponent data={SvgIcon} size={16}></IconComponent>,
    value: "Value 2",
  },
  {
    label: <IconComponent data={SvgIcon} size={16}></IconComponent>,
    value: "Value 3",
  },
];

type Story = StoryObj<typeof Segmented>;

export const Default: Story = {
  args: {
    size: "m",
    options,
    onChange: console.log,
    width: "auto",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Segmented {...args} />
    </div>
  ),
};

export const Size: Story = {
  args: {
    options,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Segmented size="s" {...args} />
      <Segmented size="m" {...args} />
    </div>
  ),
};

export const Icon: Story = {
  args: {
    options: optionsWithIcons,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Segmented {...args} />
    </div>
  ),
};
