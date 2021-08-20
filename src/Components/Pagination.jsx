import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPageAC } from "../redux/actions/index";


const getTotalPagesCount = (totalCount, pageLimit) => Math.ceil(totalCount / pageLimit);

const renderPageElements = (totalPagesCount, currentPage)  => Array(totalPagesCount)
    .fill(0)
    .map((_, index) => (
      <li
        className={currentPage === index + 1 ? "active" : "waves-effect"}
        key={index}
      >
        <a>{index + 1}</a>
      </li>
    ));


const Pagination =  React.memo(({ currentPage, totalCount, pageLimit }) => {
 
  const dispatch = useDispatch();

  const handleClick = (nextPage) => {
    dispatch(setCurrentPageAC(nextPage));
  };
  
  const totalPagesCount = getTotalPagesCount(totalCount, pageLimit)

  const pageElements = renderPageElements(totalPagesCount ,currentPage)
  
  return (
    <ul
      className="pagination"
      onClick={(e) => {
        handleClick(+e.target.textContent);
      }}
    >
      {pageElements}
    </ul>
  );
});

export default Pagination;
