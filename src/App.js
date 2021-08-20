import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import FilterBtn from "./Components/FilterBtn";

import Pagination from "./Components/Pagination";
import SortBtn from "./Components/SortBtn";
import Table from "./Components/Table";
import { getDataThunkCreator } from "./redux/actions/index";

const App = () => {
  const { currentPage, totalCount, pageLimit } = useSelector((store) => store);
  const data = useSelector((store) => store.data);

  const dispatch = useDispatch();

  const [tableData, setTableData] = React.useState(data);

  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  React.useEffect(() => {
    // get Data from json-server
    dispatch(getDataThunkCreator(currentPage));
  }, [currentPage]);

  // handle on sorting table
  const handleOnSort = (direction, sortFiled) => {
    const sortedData = [...tableData].sort((a, b) => {
      if(direction === 'up') {
        return a[sortFiled] > b[sortFiled] && 1 || -1
      } else if(direction === 'down') {
        return a[sortFiled] < b[sortFiled] && 1 || -1
      }
    });
    setTableData(sortedData);
  }

  // handle on filtering table
  const handleOnFilter = ({ column, option, value }) => {
    const filteredData = data.filter( item => {
      if(option === '=') {
        return item[column] === Number(value)
      } else if(option === 'contain') {
        return item[column].toString().toLowerCase().includes(value.toLowerCase())
      } else if(option === '>') {
        return item[column] > Number(value)
      } else if(option === '<') {
        return item[column] < Number(value)
      }
    })
    setTableData(filteredData)
  }

  return (
    <div className="App">
      <FilterBtn handleOnFilter={handleOnFilter} />
      <Table data={tableData} handleOnSort={handleOnSort} />
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        pageLimit={pageLimit}
      />
    </div>
  );
};

export default App;
