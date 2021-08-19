import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Pagination from "./Components/Pagination";
import { getDataThunkCreator } from "./redux/actions/index";

const App = () => {

  const { data, currentPage, totalCount, pageLimit } = useSelector(
    (store) => store
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    // get Data from json-server
    dispatch(getDataThunkCreator(currentPage));
  }, [currentPage]);
  
  const tableElements = data.map((item) => (
      <tr key={item.id}>
        <td>{item.date}</td>
        <td>{item.name}</td>
        <td>{item.count}</td>
        <td>{item.distance}</td>
      </tr>
    )     
  );
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Number</th>
            <th>Distance</th>
          </tr>
        </thead>

        <tbody>
          {tableElements}
        </tbody>
      </table>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        pageLimit={pageLimit}
      />
    </div>
  );
};

export default App;
