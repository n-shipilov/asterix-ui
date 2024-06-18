import type { Meta, StoryObj } from "@storybook/react";
import { Pagination, PaginationProps } from "./Pagination";
import React from "react";

export default {
  component: Pagination,
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

const useState = (args: PaginationProps) => {
  const [state, setState] = React.useState({ ...args });

  const onChange: PaginationProps["onChange"] = (page, pageSize) =>
    setState((prevState) => ({ ...prevState, page, pageSize }));

  React.useEffect(() => {
    setState({ ...args });
  }, [args]);

  return { ...state, onChange };
};

export const Default: Story = {
  args: {
    total: 50,
  },
  render: (args) => {
    const state = useState(args);
    return <Pagination {...state} />;
  },
};
