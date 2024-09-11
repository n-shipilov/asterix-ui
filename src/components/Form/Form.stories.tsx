import type { Meta, StoryObj } from "@storybook/react";
import { Button, Checkbox, Input, Radio, RadioGroup, Select, Switch, Textarea } from "components";
import { Form } from "./Form";

export default {
  component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {},
  render: () => (
    <Form onSubmit={(data) => console.log("data", data)}>
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

export const FormControls: Story = {
  args: {},
  render: () => (
    <Form
      onSubmit={(data) => console.log("data", data)}
      defaultValues={{
        radio: "apple",
        switch: false,
      }}
    >
      <Form.Field label="Plain Text">
        <span>Text</span>
      </Form.Field>
      <Form.Field
        label="Input"
        name="input"
        rules={{
          required: {
            value: true,
            message: "Field is required",
          },
        }}
      >
        <Input />
      </Form.Field>
      <Form.Field label="Input number" name="number">
        <Input type="number" />
      </Form.Field>
      <Form.Field label="Textarea" name="textarea">
        <Textarea />
      </Form.Field>
      <Form.Field label="Select" name="select">
        <Select
          options={[
            {
              key: "red",
              label: "Red",
            },
            {
              key: "green",
              label: "Green",
            },
            {
              key: "blue",
              label: "Blue",
            },
          ]}
        />
      </Form.Field>
      <Form.Field name="checkbox">
        <Checkbox>Checkbox</Checkbox>
      </Form.Field>
      <Form.Field label="Radio" name="radio">
        <RadioGroup>
          <Radio value="apple">Apple</Radio>
          <Radio value="banana">Banana</Radio>
          <Radio value="orange">Orange</Radio>
        </RadioGroup>
      </Form.Field>
      <Form.Field name="switch">
        <Switch>Switch</Switch>
      </Form.Field>
      <Button>Submit</Button>
    </Form>
  ),
};
