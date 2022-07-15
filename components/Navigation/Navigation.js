import PropTypes from "prop-types";
import React from "react";
import jsondb from "../../jsondb/products";
import { Cart } from "../../public/assets/svg";
import NavigationButton from "./NavigationButton";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <NavigationButton href="/" label="Startseite" />
      {jsondb.categories.map((category, index) => {
        return <NavigationButton key={index} href={`/${category.url}`} label={category.name} />;
      })}
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
