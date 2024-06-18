import type { Meta, StoryObj } from "@storybook/react";
import { Button, Checkbox, Input } from "..";
import { Form } from "./Form";

export default {
  component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {},
  render: () => (
    <Form onSubmit={(data, event) => console.log("data", data)}>
      <Form.Field
        label="Email"
        name="email"
        rules={{
          required: {
            value: true,
            message: "Field is required",
          },
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Enter a valid email address",
          },
        }}
      >
        <Input placeholder="Enter your email" />
      </Form.Field>
      <Form.Field
        label="Password"
        name="password"
        rules={{
          required: "Field is required",
        }}
      >
        <Input type="password" placeholder="Enter your password" />
      </Form.Field>
      <Form.Field name="remember">
        <Checkbox>Remember me</Checkbox>
      </Form.Field>
      <Button>Sign in</Button>
    </Form>
  ),
};
