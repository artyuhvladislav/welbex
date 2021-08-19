const initialState = {
  data: [],
  currentPage: 1,
  totalCount: null,
  pageLimit: 3,
};

const gettingData = "gettingData";
const setCurrentPage = 'setCurrentPage'


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case gettingData: {
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
