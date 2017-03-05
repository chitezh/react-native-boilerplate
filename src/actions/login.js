import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOG_OUT,
} from './types';

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data,
});

export const loginError = err => ({
  type: LOGIN_ERROR,
  err,
});

export const logOut = () => ({
  type: LOG_OUT,
});


export const login = () => async (dispatch) => {
  try {
    // const user = await GoogleSignin.signInPromise();

    const user = { id: '12344', name: 'Kingsley' };
    dispatch(loginSuccess(user));
  } catch (err) {
    dispatch(loginError(err));
  }
};

export const logOutUser = () => async (dispatch) => {
  try {
    // Other network logout actions if any

    dispatch(logOut());
  } catch (err) {
    throw new Error(err);
  }
};
