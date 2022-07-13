import React from "react";

import Navigation from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
  subcomponent: ["NavigationButton"],
  excludeStories: ["Template"],
};

export const Template = args => <Navigation {...args} />;

export const Base = Template.bind({});
Base.args = {};
