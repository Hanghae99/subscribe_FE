import axios from "axios";

// const token = sessionStorage.getItem("token");

const instance = axios.create({
  baseURL: "http://3.35.208.142",
  headers: {
    "content-type": "applicaton/json;charset=UTF-8",
    'accept': "application/json",
    // 'Authorization': token,
  },
});

export const apis = {
  signUp: (userInfo) =>
    instance.post("/user/signup", userInfo, {
      headers: {
        "content-type": "applicaton/json;charset=UTF-8",
        accept: "application/json",
      },
    }), 
  kakaoLogin: (code)=> instance.get('/user/kakao/callback?code=${code}'),
  isLogin: () =>
    instance.get("/user/loginCheck", {
      headers: {
        "content-type": "applicaton/json;charset=UTF-8",
        accept: "application/json",
        // Authorization: token,
      },
    }),
};
