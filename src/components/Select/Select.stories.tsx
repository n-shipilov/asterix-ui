import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const options = [
  { label: "React", value: 1 },
  { label: "Vue", value: 2 },
  { label: "Angular", value: 3 },
  { label: "Ember", value: 4 },
  { label: "Svelte", value: 5 },
  { label: "Backbone", value: 6 },
  { label: "LitElement", value: 7 },
  { label: "Preact", value: 8 },
  { label: "Meteor", value: 9 },
  { label: "Riot", value: 10 },
  { label: "jQuery", value: 11 },
  { label: "Nuxt", value: 12 },
  { label: "Gatsby", value: 13 },
  { label: "Next.js", value: 14 },
  { label: "Alpine.js", value: 15 },
  { label: "Foundation", value: 16 },
  { label: "Mithril", value: 17 },
  { label: "Stimulus", value: 18 },
  { label: "Aurelia", value: 19 },
  { label: "Mobile Angular UI", value: 20 },
];

export default {
  component: Select,
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: "Select option",
    disabled: false,
    searchable: false,
    size: "m",
    options: options,
  },
  render: (args) => {
    return <Select {...args} />;
  },
};
