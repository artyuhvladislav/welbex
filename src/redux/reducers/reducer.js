const initialState = {
  data: [],
  currentPage: 1,
  totalCount: null,
  pageLimit: 3,
};

const getData = "gettingData";
const setCurrentPage = 'setCurrentPage'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case getData: {
      return {
        ...state,
        data: action.data,
        totalCount: action.totalCount,
      };
    }
    case setCurrentPage: {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};



export default reducer
