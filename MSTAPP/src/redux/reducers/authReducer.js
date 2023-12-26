import {SET_EMP_ID, SET_PASSWORD, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actionTypes';

const initialState = {
  empID: '',
  password: '',
  token: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMP_ID:
      return {...state, empID: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload};
    // case LOGIN_SUCCESS:
    //   return {...state, token: action.payload, error: null};
    // case LOGIN_FAILURE:
    //   return {...state, error: action.payload};
    default:
      return state;
  }
};
