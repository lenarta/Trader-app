import {
  ADD_STOCKS_DATA,
} from '../constants/actionTypes';

const initialState = {
  stocks: '',
};

function stocksReducer(state = initialState, action) {
  if (action.type === ADD_STOCKS_DATA) {
    return {
      ...state,
      stocks: action.payload,
    };
  }
  //if (action.type === DELETE_STORE) {
    //return initialState;
  //}
  return state;
}

export default stocksReducer;