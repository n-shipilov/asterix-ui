import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./Toaster";
import {
  ToasterProvider,
  useToasterContext,
} from "./ToasterProvider/ToasterProvider";
import { Button } from "../Button";

export default {
  component: Toaster,
} as Meta<typeof Toaster>;

type Story = StoryObj<typeof Toaster>;

const ToasterWithHooks = () => {
  const { add } = useToasterContext();

  const handleVisibleToast = () => {
    add({
      title: "Toast title",
      type: "error",
      content: "Toast description",
    });
  };

  return (
    <>
      <Button onClick={handleVisibleToast}>Show toast</Button>
      <Toaster />
    </>
  );
};

export const Default: Story = {
  args: {},
  render: () => (
    <ToasterProvider>
      <ToasterWithHooks />
    </ToasterProvider>
  ),
};
