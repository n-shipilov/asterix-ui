import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

export default {
  component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    disabled: false,
  },
};

export const Type: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Input {...args} type="number" />
    </div>
  ),
};
