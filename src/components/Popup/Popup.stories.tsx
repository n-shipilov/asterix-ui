/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Popup } from "./Popup";

export default {
  component: Popup,
} as Meta<typeof Popup>;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {},
  render: () => {
    const [anchorElement, setAnchorElement] = useState<HTMLSpanElement | null>(null);
    const [visible, setVisible] = useState(false);

    return (
      <>
        <span ref={setAnchorElement} onClick={() => setVisible((prev) => !prev)}>
          Open popup
        </span>
        <Popup
          anchorElement={anchorElement}
          open={visible}
          placement="bottom-start"
          onOpenChange={setVisible}
        >
          <div
            style={{
              padding: "8px 12px",
              border: "1px dashed #bbb",
            }}
          >
            Popup content
          </div>
        </Popup>
      </>
    );
  },
};
