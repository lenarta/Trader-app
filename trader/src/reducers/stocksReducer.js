import { ADD_STOCKS_DATA } from '../constants/actionTypes';

const stockIinitialState = {
  stocks: '',
  prices: {
    GOOG: 0,
    MSFT: 0,
    TWTR: 0,
    FB: 0,
  },
};

export function stocksReducer(state = stockIinitialState, action) {
  if (action.type === ADD_STOCKS_DATA) {
    return {
      ...state,
      stocks: action.payload,
      prices: {
        GOOG: action.payload[0].lastSalePrice,
        MSFT: action.payload[1].lastSalePrice,
        TWTR: action.payload[2].lastSalePrice,
        FB: action.payload[3].lastSalePrice,
      },
    };
  }
  return state;
}
