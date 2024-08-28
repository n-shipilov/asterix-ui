import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button";

export default {
  component: Dialog,
} as Meta<typeof Dialog>;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button view="secondary" onClick={() => setOpen(true)}>
          Open dialog
        </Button>
        <Dialog {...args} open={open} onClose={() => setOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Dialog>
      </>
    );
  },
};
