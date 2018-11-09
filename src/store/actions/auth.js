import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken,
    userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => dispatch(logout()), expirationTime * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {email, password, returnSecureToken: true};
    
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='+process.env.REACT_APP_FB_AUTH_KEY;
    if(!isSignUp) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='+process.env.REACT_APP_FB_AUTH_KEY;
    }

    axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path
  }
}