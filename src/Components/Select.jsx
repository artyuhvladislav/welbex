import React from "react";

const renderOptionsElements = (options) => {
  return options.map((item, index) => (
    <option
      key={index}
      value={index === 0 ? item : item.toLowerCase()}
      disabled={index === 0}
    >
      {item}
    </option>
  ));
};
const Select = ({ options, filterValues, setFilterValues, filterPropName }) => {
  const optionsElements = renderOptionsElements(options);

  return (
    <select
      onChange={(event) => {
        const newFilterValues = {
          ...filterValues,
          [filterPropName]: event.target.value,
        };
        setFilterValues(newFilterValues);
      }}
      defaultValue={options[0]}
    >
      {optionsElements}
    </select>
  );
};

export default Select;
