import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SIGNUP = "SIGNUP";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const ISLOGIN = "ISLOGIN";

const signUp = createAction(SIGNUP, (userInfo) => ({ userInfo }));
const logIn = createAction(LOGIN, (userInfo) => ({ userInfo }));
const logOut = createAction(LOGOUT, (userInfo) => ({ userInfo }));
const isLogin = createAction(ISLOGIN, (token) => ({ token }));

const initialState = {
  userName: "asdf1000",
  nickname: "9duck9duck",
};

const signUpDB = () => {
  return function (dispatch, getState) {};
};

const logInDB = () => {
  return function (dispatch, getState) {};
};

const isLogInDB = () => {
  return function (dispatch, getState) {};
};

export default handleActions(
  {
    [SIGNUP]: (state, action) => produce(state, (draft) => {}),
    [LOGIN]: (state, action) => produce(state, (draft) => {}),
    [LOGOUT]: (state, action) => produce(state, (draft) => {}),
  },
  []
);
