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
    const [anchorElement, setAnchorElement] = React.useState(null);
    const [visible, setVisible] = useState(false);

    return (
      <>
        <span ref={anchorElement} onClick={() => setVisible((prev) => !prev)}>
          Open popup
        </span>
        <Popup anchorElement={anchorElement} placement="bottom-start" open={visible}>
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
