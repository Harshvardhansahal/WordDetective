// reducer.js
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

const initialState = {
  dataSource: [],
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        dataSource: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        dataSource: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
