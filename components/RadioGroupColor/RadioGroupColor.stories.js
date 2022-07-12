import React from "react";

import RadioGroupColor from "./RadioGroupColor";

export default {
  title: "Components/RadioGroupColor",
  component: RadioGroupColor,
  excludeStories: ["Template"],
};

export const Template = args => <RadioGroupColor {...args} />;

export const Base = Template.bind({});
Base.args = {
  
};
