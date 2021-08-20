import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import FilterContainer from "./Components/FilterContainer";
import Pagination from "./Components/Pagination";
import Table from "./Components/Table";
import { getDataThunkCreator } from "./redux/actions/index";
import { getData, getPageInfo } from "./redux/selectors/selectors";
import { filter, sort } from "./utils";

const App = () => {
  const { currentPage, totalCount, pageLimit } = useSelector(getPageInfo);
  const data = useSelector(getData);

  const dispatch = useDispatch();

  const [tableData, setTableData] = React.useState(data);

  React.useEffect(() => {
    setTableData(data);
  }, [data]);

  React.useEffect(() => {
    dispatch(getDataThunkCreator(currentPage));
  }, [currentPage]);

  const handleOnSort = React.useCallback((direction, sortFiled) => {
    sort(direction, sortFiled, tableData, setTableData);
  });



  const handleOnFilter = ({ column, option, value }) => {
    filter({ column, option, value }, data, setTableData)
  };

  return (
    <div className="App">
   
      <FilterContainer handleOnFilter={handleOnFilter} />
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
