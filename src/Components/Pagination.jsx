import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPageAC } from "../redux/actions/index";

const Pagination =  React.memo(({ currentPage, totalCount, pageLimit }) => {
 
  const dispatch = useDispatch();

  // dispatch nextPage ot the store
  const handleClick = (nextPage) => {
    dispatch(setCurrentPageAC(nextPage));
  };

  // get count of pages
  const getPagesCount = () => Math.ceil(totalCount / pageLimit);

  const pagesElements = Array(getPagesCount())
    .fill(0)
    .map((_, index) => (
      <li
        className={currentPage === index + 1 ? "active" : "waves-effect"}
        key={index}
      >
        <a>{index + 1}</a>
      </li>
    ));

  return (
    <ul
      className="pagination"
      onClick={(e) => {
        handleClick(+e.target.textContent);
      }}
    >
      {pagesElements}
    </ul>
  );
});

export default Pagination;
