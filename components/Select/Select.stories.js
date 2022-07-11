import React from "react";

import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  excludeStories: ["Template"],
};

export const Template = args => <Select {...args} />;

export const Base = Template.bind({});
Base.args = {
  label: "Label",
};
