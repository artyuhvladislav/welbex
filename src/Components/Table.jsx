import React from "react";
import SortBtn from "./SortBtn";

const renderTableElements = (data) => {
  return data.map(({ id, date, name, count, distance }) => (
    <tr key={id}>
      <td>{date}</td>
      <td>{name}</td>
      <td>{count}</td>
      <td>{distance}</td>
    </tr>
  ));
};

const tableArticles = ['Date', 'Name', 'Count', 'Distance']

const renderTableArticlesElements = (tableArticles, handleOnSort) => {
  return tableArticles.map((item, index) => {
    if (index === 0) {
      return (
        <th key={index}>
          <span>{item}</span>
        </th>
      );
    } else {
      return (
        <th key={index}>
          <span>{item}</span>
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
      );
    }
  });
};

const Table = ({ data, handleOnSort }) => {

  const tableElements = renderTableElements(data);
  const tableArticlesElements = renderTableArticlesElements(tableArticles, handleOnSort)

  return (
    <table>
      <thead>
        <tr>{tableArticlesElements}</tr>
      </thead>

      <tbody>{tableElements}</tbody>
    </table>
  );
};

export default Table;
