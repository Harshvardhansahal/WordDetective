// reducer.js
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST } from './actions';

const initialState = {
  dataSource: [],
  error: null,
  loading: false, // Add loading state
};
// Immer.js
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true, // Set loading to true when data is requested
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        dataSource: action.payload,
        error: null,
        loading: false, // Set loading to false when data is successfully fetched
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        dataSource: [],
        error: action.payload,
        loading: false, // Set loading to false when there is an error
      };
    default:
      return state;
  }
};

export default dataReducer;
