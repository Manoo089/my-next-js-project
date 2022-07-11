import React from "react";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  excludeStories: ["Template"],
};

export const Template = args => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: "Content",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Content",
};