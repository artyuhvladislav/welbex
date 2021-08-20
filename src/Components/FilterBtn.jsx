import React from "react";

const FilterBtn = ({ handleOnFilter }) => {
  const obj = React.useRef({
    column: "",
    option: "",
    value: "",
  });
  return (
    <div className="row">
      <div className="col s4">
        <select onChange={(event) => (obj.current.column = event.target.value)}>
          <option value="" disabled selected>
            Choose column
          </option>
          <option value="date">Date</option>
          <option value="name">Name</option>
          <option value="count">Count</option>
          <option value="distance">Distance</option>
        </select>
      </div>
      <div className="col s4">
        <select onChange={(event) => (obj.current.option = event.target.value)}>
          <option value="" disabled selected>
            Choose your options
          </option>
          <option value="=">=</option>
          <option value="contain">contain</option>
          <option value=">">&gt;</option>
          <option value="<">&lt;</option>
        </select>
      </div>
      <div className="col s4">
        <textarea
          onChange={(event) => {
            obj.current.value = event.target.value;
          }}
          name=""
          id=""
          cols="10"
          rows="10"
        ></textarea>
      </div>
      <div className="col s4">
        <button
          onClick={() => {
            handleOnFilter(obj.current);
          }}
        >
          filter
        </button>
      </div>
    </div>
  );
};

export default FilterBtn;

