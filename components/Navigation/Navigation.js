import React from "react";
import jsondb from "../../jsondb/products";
import NavigationButton from "./NavigationButton";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <NavigationButton href="/" label="Startseite" />
      <NavigationButton href="/vorspeisen" label="Vorspeisen" />
      <NavigationButton href="/hauptgerichte" label="Hauptgerichte" />
      <NavigationButton href="/nachspeisen" label="Nachspeisen" />
      <NavigationButton href="/drinks" label="Getränke" />
      
    </nav>
  );
};

Navigation.propTypes = {};

export default Navigation;
