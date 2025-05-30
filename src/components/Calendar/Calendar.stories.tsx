import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "./Calendar";

export default {
  component: Calendar,
} as Meta<typeof Calendar>;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    mode: "days",
    locale: "en-US",
    firstDayOfWeek: 0,
    onSelectDate: console.log,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Calendar {...args} />
    </div>
  ),
};
