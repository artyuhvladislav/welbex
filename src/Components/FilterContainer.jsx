import React from "react";
import Select from "./Select";
import TextArea from "./TextArea";

const columnNames = ["Choose column", "Date", "Name", "Count", "Distance"];
const optionNames = ["Choose your options", "=", "contain", ">", "<"];

const FilterContainer = ({ handleOnFilter }) => {

  const [filterValues, setFilterValues] = React.useState({
    column: "",
    option: "",
    value: "",
  });

  return (
    <div className="row">
      <div className="col s4">
        <Select
          options={columnNames}
          filterValues={filterValues}
          setFilterValues={setFilterValues}
          filterPropName={"column"}
        />
      </div>
      <div className="col s4">
        <Select
          options={optionNames}
          filterValues={filterValues}
          setFilterValues={setFilterValues}
          filterPropName={"option"}
        />
      </div>
      <div className="col s4">
        <TextArea
          filterValues={filterValues}
          setFilterValues={setFilterValues}
        />
      </div>
      <div className="col s4">
        <button
          onClick={() => {
            console.log(filterValues);
            handleOnFilter(filterValues);
          }}
        >
          filter
        </button>
      </div>
    </div>
  );
};

export default FilterContainer;
