import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Pagination from "./Components/Pagination";
import SortBtn from "./Components/SortBtn";
import Table from "./Components/Table";
import { getDataThunkCreator } from "./redux/actions/index";

const App = () => {
  const { currentPage, totalCount, pageLimit } = useSelector((store) => store);
  const data = useSelector((store) => store.data);

  const dispatch = useDispatch();

  const [sortedData, setSortedData] = React.useState(data);

  React.useEffect(() => {
    setSortedData(data);
  }, [data]);

  React.useEffect(() => {
    // get Data from json-server
    dispatch(getDataThunkCreator(currentPage));
  }, [currentPage]);

  const handleOnSort = (direction, sortFiled) => {
  
    const newSortedData = [...sortedData].sort((a, b) => {
      if(direction === 'up') {
        return a[sortFiled] > b[sortFiled] && 1 || -1
      } else if(direction === 'down') {
        return a[sortFiled] < b[sortFiled] && 1 || -1
      }
    });
    setSortedData(newSortedData);
  }

  return (
    <div className="App">
      <Table data={sortedData} handleOnSort={handleOnSort}/>
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        pageLimit={pageLimit}
      />
    </div>
  );
};

export default App;
