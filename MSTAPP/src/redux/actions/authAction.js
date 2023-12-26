
import {SET_EMP_ID, SET_PASSWORD, LOGIN_SUCCESS, LOGIN_FAILURE} from  '../actionTypes'

export const setEmpID = (empID) => ({
    type: SET_EMP_ID,
    payload: empID,
  });
  
  export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password,
  });

  // export const Login = (empID, password) => {
  //   return async (dispatch) => {
  //     try {
  //       // Make API call and get response
  //       const response = { success: true, token: 'your_token_here' };
  
  //       dispatch({ type: LOGIN_SUCCESS, payload: response.token });
  //     } catch (error) {
  //       console.error('Login failed:', error);
  //       dispatch({ type: LOGIN_FAILURE, payload: error.message });
  //     }
  //   };
  // };