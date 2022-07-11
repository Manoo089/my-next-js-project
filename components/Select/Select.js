import PropTypes from "prop-types";
import React from "react";

const Select = ({ id, label, size = "default" }) => {
  return (
    <div className="Select">
      <label htmlFor={id}>{label}:</label>
      <select className={["Select--dropdown", [`${size}`]].join(" ")} id={id}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
};

export default Select;
