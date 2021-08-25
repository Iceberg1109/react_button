import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "danger"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  text: "SimpleFi",
  type: "primary",
  disabled: false,
  action: () => alert("SimpleFi"),
};
