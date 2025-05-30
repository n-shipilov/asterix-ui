import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal, ModalProps } from "./Modal";
import { Button } from "../Button";

export default {
  component: Modal,
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;

const ModalWithHooks = (args: ModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button view="secondary" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal open={open} onOpenChange={setOpen} {...args}>
        <div style={{ padding: "24px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalWithHooks {...args} />,
};
