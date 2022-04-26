import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { apis } from "../../shared/api";

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

const kakaoLogin = (code) => {
  return function (dispatch, getState) {
    console.log("모듈에서 확인 ::", code);

    axios({
      method: "GET",
      url: `http://15.164.96.141/user/kakao/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.headers.authorization;
        sessionStorage.setItem("token", ACCESS_TOKEN); //세션에 저장
        alert("로그인 성공");
        // history.replace("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("카카오소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        // history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
    // apis로 연결
    // apis.kakaoLogin(code)
  };
};

const naverLogin = (code) => {
  return function (dispatch, getState) {
    console.log("모듈에서 확인 ::", code);
    
    return;
    axios({
      method: "GET",
      url: `http://15.164.96.141/user/naver/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.headers.authorization;
        sessionStorage.setItem("token", ACCESS_TOKEN); //세션에 저장
        alert("로그인 성공");
        // history.replace("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("네이버소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        // history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

const googleLogin = (response) => {
  return function (dispatch, getState) {
    console.log("모듈에서 확인 ::", response);
    console.log("accessToken 확인 ::", response.accessToken);
    console.log("tokenId 확인 ::", response.tokenId);
    console.log("profileObj 확인 ::", response.profileObj);
    return;

    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded",
    // },
    axios.post(`http://15.164.96.141/user/google/callback`,{
      accessToken: response.accessToken,
      tokenId: response.tokenId,
      profile: response.profileObj,
      })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임
        const ACCESS_TOKEN = res.headers.authorization;
        sessionStorage.setItem("token", ACCESS_TOKEN); //세션에 저장
        alert("로그인 성공");
        // history.replace("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("카카오소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        // history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};

const isLogInDB = () => {
  return function (dispatch, getState) {};
};

export default handleActions(
  {
    [ISLOGIN]: (state, action) => produce(state, (draft) => {}),
    [LOGOUT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

export const actionCreators = {
  kakaoLogin,
  naverLogin,
  googleLogin,
};
