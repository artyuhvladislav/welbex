import React from "react";

const TextArea = ({ filterValues, setFilterValues }) => {
  return (
    <textarea
      onChange={(event) => {
        const newFilterValues = { ...filterValues, value: event.target.value };
        setFilterValues(newFilterValues);
      }}
      name=""
      id=""
      cols="10"
      rows="10"
    ></textarea>
  );
};

export default TextArea;
