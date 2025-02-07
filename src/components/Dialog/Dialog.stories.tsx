import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogProps } from "./Dialog";
import { Button } from "../Button";

export default {
  component: Dialog,
} as Meta<typeof Dialog>;

type Story = StoryObj<typeof Dialog>;

const DialogWithHooks = (args: DialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button view="secondary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} {...args}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem cumque
        repellendus eaque est dolor eius expedita nulla ullam? Tenetur reprehenderit aut voluptatum
        impedit voluptates in natus iure cumque eaque?
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: (args) => <DialogWithHooks {...args} />,
};
