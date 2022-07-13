import PropTypes from "prop-types";
import React from "react";

const RadioGroupColor = ({ id, name, onChange, value }) => {
  return (
    <input
      type="radio"
      className="RadioGroupColor"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

RadioGroupColor.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

RadioGroupColor.displayName = "RadioGroup";

export default RadioGroupColor;