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
  userId: 1,
  nickname: "9duck9duck",
  userLevel: 3,
  userExp: 200,
  userExpPercent: "20%",
};

export const signUpDB = (userInfo) => {
  return function (dispatch, getState) {};
};

export const logInDB = () => {
  return function (dispatch, getState) {};
};

export const isLogInDB = () => {
  return function (dispatch, getState) {};
};

export default handleActions(
  {
    [ISLOGIN]: (state, action) => produce(state, (draft) => {}),
    [LOGOUT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
