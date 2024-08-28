import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

export default {
  component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: "Select option",
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
  },
  render: (args) => {
    return <Select {...args} className="test" />;
  },
};
