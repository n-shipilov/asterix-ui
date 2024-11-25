import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { ColumnsType } from "./types";

export default {
  component: Table,
} as Meta<typeof Table>;

type Story = StoryObj<typeof Table>;

interface DataItem {
  id: number;
  name: string;
  city?: string;
  phone: string;
  count: number;
  date: string;
}

const data: DataItem[] = [
  {
    id: 1,
    name: "Emily Johnson",
    city: "Los Angeles",
    phone: "+1 987-654-3210",
    count: 51,
    date: "2023-11-23",
  },
  {
    id: 2,
    name: "James Williams",
    city: "Sydney",
    phone: "+61 9876-543210",
    count: 10,
    date: "2023-05-14",
  },
  {
    id: 3,
    name: "Olivia Brown",
    city: "",
    phone: "+7 (950) 372-56-84",
    count: 54,
    date: "2023-03-29",
  },
  {
    id: 4,
    name: "Ethan Miller",
    phone: "+1 555-123-4567",
    count: 75,
    date: "2023-02-01",
  },
  {
    id: 5,
    name: "John Smith",
    city: "New York",
    phone: "+1 123-456-7890",
    count: 82,
    date: "2023-03-15",
  },
  {
    id: 6,
    name: "Emily Johnson",
    city: "Los Angeles",
    phone: "+1 987-654-3210",
    count: 51,
    date: "2023-11-23",
  },
  {
    id: 7,
    name: "James Williams",
    city: "Sydney",
    phone: "+61 9876-543210",
    count: 10,
    date: "2023-05-14",
  },
  {
    id: 8,
    name: "Olivia Brown",
    city: "",
    phone: "+7 (950) 372-56-84",
    count: 54,
    date: "2023-03-29",
  },
  {
    id: 9,
    name: "Ethan Miller",
    phone: "+1 555-123-4567",
    count: 75,
    date: "2023-02-01",
  },
];

// TODO: Если передать DataItem как generic, то это вызывет ошибку
const columns: ColumnsType<any> = [
  {
    key: "name",
    title: "Name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (_, record, index) => {
      if (index % 2 === 0) {
        return record.name;
      } else {
        const [name, surname] = record.name.split(" ");
        return (
          <div>
            {name}
            <br />
            {surname}
          </div>
        );
      }
    },
  },
  {
    key: "city",
    title: "City",
    render: (value) => (value ? value : "—"),
  },
  {
    key: "phone",
    title: "Phone",
  },
  {
    key: "count",
    title: "Count",
    align: "right",
    sorter: (a, b) => a.count - b.count,
  },
  {
    key: "date",
    title: "Date created",
    align: "right",
  },
];

export const Default: Story = {
  args: {
    data: data.slice(0, 5),
    columns: columns,
    rowKey: "id",
  },
  render: (args) => {
    return <Table {...args} />;
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: columns,
    rowKey: "id",
  },
  render: (args) => {
    return <Table {...args} />;
  },
};

export const Selection: Story = {
  args: {
    data: data.slice(0, 5),
    columns: columns,
    rowSelection: {
      onChange: (selectedRowKeys) => console.log("selectedRowKeys:", selectedRowKeys),
    },
    rowKey: "id",
  },
  render: (args) => {
    return <Table {...args} />;
  },
};

export const Scroll: Story = {
  args: {
    data: data,
    columns: columns,
    rowKey: "id",
    scroll: {
      y: 273,
    },
  },
  render: (args) => {
    return <Table {...args} />;
  },
};
