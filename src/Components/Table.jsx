import React from "react";
import SortBtn from "./SortBtn";

const Table = ({ data, handleOnSort }) => {
  const tableElements = data.map((item) => (
    <tr key={item.id}>
      <td>{item.date}</td>
      <td>{item.name}</td>
      <td>{item.count}</td>
      <td>{item.distance}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>
            <span>Name</span>
            <SortBtn
              handleOnSort={handleOnSort}
              direction={"up"}
              sortFiled={"name"}
            />
            <SortBtn
              handleOnSort={handleOnSort}
              direction={"down"}
              sortFiled={"name"}
            />
          </th>
          <th>
            <span>Count</span>
            <SortBtn
              handleOnSort={handleOnSort}
              direction={"up"}
              sortFiled={"count"}
            />
            <SortBtn
              handleOnSort={handleOnSort}
              direction={"down"}
              sortFiled={"count"}
            />
          </th>
          <th>
            <span>Distance</span>
            <SortBtn
              handleOnSort={handleOnSort}
              direction={"up"}
              sortFiled={"distance"}
            />
            <SortBtn
              handleOnSort={handleOnSort}
              direction={"down"}
              sortFiled={"distance"}
            />
          </th>
        </tr>
      </thead>

      <tbody>{tableElements}</tbody>
    </table>
  );
};

export default Table;
