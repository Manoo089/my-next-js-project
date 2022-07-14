import PropTypes from "prop-types";
import React from "react";

const Button = ({ disabled = false, label, onClick }) => {

  const isDisabled = disabled ? "Button--disabled" : "";

  return (
    <button className={["Button", [`${isDisabled}`]].join(" ")} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
};

export default Button;