import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./Spinner";

export default {
  component: Spinner,
} as Meta<typeof Spinner>;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = { args: {} };

export const Size: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Spinner size="s" {...args} />
      <Spinner size="m" {...args} />
    </div>
  ),
};
