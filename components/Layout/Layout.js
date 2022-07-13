import React from "react";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="Layout">{children}</div>
    </>
  );
};

export default Layout;
