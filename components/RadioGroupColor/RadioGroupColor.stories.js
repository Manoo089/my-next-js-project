import React from "react";

import RadioGroupColor from "./RadioGroupColor";

export default {
  title: "Components/RadioGroupColor",
  component: RadioGroupColor,
  excludeStories: ["Template"],
};

export const Template = args => <RadioGroupColor {...args} />;
Template.args = {
  id: "id",
  name: "radio",
  value: "radio1",
};

export const Base = Template.bind({});
Base.args = {
  ...Template.args,
};
