import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Textarea,
  Segmented,
} from "../../components";
import { Form } from "./Form";

export default {
  component: Form,
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

type FormValues = {
  input: string;
  number: string;
  textarea: string;
  select: any;
  segmented: string;
  checkbox: boolean;
  radio: string;
  switch: boolean;
};

const ControlledForm = () => {
  const form = Form.useForm<FormValues>({
    defaultValues: {
      radio: "apple",
    },
    mode: "all",
  });
  const watch = Form.useWatch({ control: form.control });

  return (
    <Form form={form} onSubmit={(data) => console.log("data", data)}>
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
              value: "red",
              label: "Red",
            },
            {
              value: "green",
              label: "Green",
            },
            {
              value: "blue",
              label: "Blue",
            },
          ]}
        />
      </Form.Field>
      <Form.Field label="Segmented" name="segmented">
        <Segmented
          options={[
            {
              label: "Value 1",
              value: "Value 1",
            },
            {
              label: "Value 2",
              value: "Value 2",
            },
            {
              label: "Value 3",
              value: "Value 3",
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
      {watch?.switch && (
        <Form.Field name="hidden" label="Hidden Input">
          <Input hasClear />
        </Form.Field>
      )}
      <Button view="secondary" onClick={() => form.reset()}>
        Reset Values
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

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
          minLength: {
            value: 6,
            message: "The minimum password length should be 6",
          },
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

export const Controls: Story = {
  args: {},
  render: ControlledForm,
};
