import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "../Radio";
import { RadioGroup } from "./RadioGroup";

export default {
  component: RadioGroup,
} as Meta<typeof RadioGroup>;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    direction: "horizontal",
    value: "Apple",
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="Apple">Apple</Radio>
      <Radio value="Banana">Banana</Radio>
      <Radio value="Orange">Orange</Radio>
    </RadioGroup>
  ),
};
