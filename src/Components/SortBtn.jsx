import React from "react";

const SortBtn = ({ handleOnSort, direction, sortFiled }) => {

  return (
    <div>
      <div onClick={() => handleOnSort(direction, sortFiled)}>
        <i className="material-icons">{`arrow_drop_${direction}`}</i>
      </div>
    </div>
  );
};

export default SortBtn;
