import type { Meta, StoryObj } from "@storybook/react";
import { Popup } from "./Popup";
import { useRef, useState } from "react";

export default {
  component: Popup,
} as Meta<typeof Popup>;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {},
  render: () => {
    const anchorRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);

    return (
      <>
        <span ref={anchorRef} onClick={() => setVisible((prev) => !prev)}>
          Open popup
        </span>
        <Popup
          anchorRef={anchorRef}
          placement="bottom-start"
          open={visible}
          onClose={() => setVisible(false)}
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
