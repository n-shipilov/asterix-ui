import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./Toaster";
import { ToasterProvider, useToasterContext } from "./ToasterProvider/ToasterProvider";
import { Button } from "../Button";

export default {
  component: Toaster,
} as Meta<typeof Toaster>;

type Story = StoryObj<typeof Toaster>;

const ToasterTypes = () => {
  const { add } = useToasterContext();

  const handleVisibleInfoToast = () => {
    add({
      title: "Toast title",
      type: "info",
      content:
        "This is the content of the toast. This is the content of the toast. This is the content of the toast.",
    });
  };

  const handleVisibleSuccessToast = () => {
    add({
      title: "Toast title",
      type: "success",
      content:
        "This is the content of the toast. This is the content of the toast. This is the content of the toast.",
    });
  };

  const handleVisibleWarningToast = () => {
    add({
      title: "Toast title",
      type: "warning",
      content:
        "This is the content of the toast. This is the content of the toast. This is the content of the toast.",
    });
  };

  const handleVisibleErrorToast = () => {
    add({
      title: "Toast title",
      type: "error",
      content:
        "This is the content of the toast. This is the content of the toast. This is the content of the toast.",
    });
  };

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button view="secondary" onClick={handleVisibleInfoToast}>
          Info
        </Button>
        <Button view="secondary" onClick={handleVisibleSuccessToast}>
          Success
        </Button>
        <Button view="secondary" onClick={handleVisibleWarningToast}>
          Warning
        </Button>
        <Button view="secondary" onClick={handleVisibleErrorToast}>
          Error
        </Button>
      </div>
      <Toaster />
    </>
  );
};

export const Default: Story = {
  args: {},
  render: () => (
    <ToasterProvider>
      <ToasterTypes />
    </ToasterProvider>
  ),
};
