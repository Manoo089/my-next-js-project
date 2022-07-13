import React from "react";

import NavigationButton from "./NavigationButton";

export default {
  title: "Components/Navigation/NavigationButton",
  component: NavigationButton,
  excludeStories: ["Template"],
};

export const Template = args => <NavigationButton {...args} />;

export const Base = Template.bind({});
Base.args = {
  className: "NavigationButton",
  label: "Content",
  href: "/",
};
