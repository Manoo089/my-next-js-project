import PropTypes from "prop-types";
import React from "react";

const Select = ({
  id,
  label,
  onChange,
  productSize = [],
  productQuantity = [],
  quantity = false,
  size = 'default' || 's' || 'l',
  sized = false,
}) => {
  const isLabel = label ? label : null;
  const isSized = sized ? "Size" : null;
  const isQuantity = quantity ? "Quantity" : null;

  return (
    <div className="Select">
      <label htmlFor={id} className="Select--label">
        {isLabel || isSized || isQuantity}:
      </label>

      <select
        className={["Select--dropdown", [`${size}`]].join(" ")}
        id={id}
        onChange={onChange}
      >

        {isLabel && 
          productSize.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            )
          })}

        {isSized &&
          productSize.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}

        {isQuantity &&
          productQuantity.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
      </select>
    </div>
  );
};

Select.propTypes = {
  isSized: PropTypes.bool,
  isQuantity: PropTypes.bool,
  label: PropTypes.string,
  productSize: PropTypes.array,
  productQuantity: PropTypes.array,
  size: PropTypes.oneOf(['default', 'l', 's']),
};

export default Select;