import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT,
} from '../actions/types';

const initialState = {
  isAuthenticated: false,
  pendingLoginRequest: false,
  data: {},
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        pendingLoginRequest: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        pendingLoginRequest: false,
        isAuthenticated: true,
        data: action.data,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case LOG_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
