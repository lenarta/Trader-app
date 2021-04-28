import {
  LOAD_USER_TOKEN,
  LOAD_USER_TOKEN_PAYLOAD,
  DELETE_STORE,
} from '../constants/actionTypes';

const initialState = {
  token: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2QiLCJleHAiOjE2MTk2NTM1MzQsImlhdCI6MTYxOTYxNzUzNH0.SBjdKXgstI3er3-qkgypD2d8jOuhdyGMToGr9Eoor0Y`,
  data: {
    userName: '',
  },
};

function loginReducer(state = initialState, action) {
  if (action.type === LOAD_USER_TOKEN) {
    return {
      ...state,
      token: action.payload,
    };
  }
  if (action.type === LOAD_USER_TOKEN_PAYLOAD) {
    return {
      ...state,
      data: action.payload,
    };
  }
  if (action.type === DELETE_STORE) {
    return initialState;
  }
  return state;
}

export default loginReducer;
