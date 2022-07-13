import PropTypes from "prop-types";
import React from "react";
import { Cart } from "../../public/assets/svg";
import NavigationButton from "./NavigationButton";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <NavigationButton href="/" label="Startseite" />
      <NavigationButton href="/vorspeisen" label="Vorspeisen" />
      <NavigationButton href="/hauptgerichte" label="Hauptgerichte" />
      <NavigationButton href="/nachspeisen" label="Nachspeisen" />
      <NavigationButton href="/getränke" label="Getränke" />
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
