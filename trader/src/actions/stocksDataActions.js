import { ADD_STOCKS_DATA } from '../constants/actionTypes';

export function addStocksData(payload) {
  return {
    type: ADD_STOCKS_DATA,
    payload,
  };
}
