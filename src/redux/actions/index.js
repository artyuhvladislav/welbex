import { getData } from "../../API/getData";

const gettingData = "gettingData";
const setCurrentPage = 'setCurrentPage'

export const setDataAC = (data, totalCount) => ({
  type: gettingData,
  data,
  totalCount,
});

export const setCurrentPageAC = (payload) => ({
  type: setCurrentPage,
  payload,
});

export const getDataThunkCreator =
  (currentPage, pageLimit) => async (dispatch) => {
    const [data, totalCount] = await getData(currentPage, pageLimit);
    dispatch(setDataAC(data, totalCount));
};
