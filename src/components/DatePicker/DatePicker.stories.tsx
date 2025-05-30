import type { Meta, StoryObj } from "@storybook/react-vite";
import { DatePicker } from "./DatePicker";

export default {
  component: DatePicker,
} as Meta<typeof DatePicker>;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    // format: "DD.MM.YYYY",
    locale: "en-US",
  },
};
