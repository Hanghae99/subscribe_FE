import React from "react";

// 5기 코드 반영한 것, 일단 다른방식으로 구현은 해놔서 필요없음 : NaverLogin.js

const Naver = (props) => {

  const _clientId = 'oq32J_8jgLtjcSRvYUO4';
  const NAVER_CLIENT_SECRET = 'dc6LwAfBEL';
  const _callBack = 'http://localhost:3000/user/naver/callback';

  function randomString() {
    const chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const stringLength = 6;
    let randomstring = "";
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }
  let newState = randomString();
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${_clientId}&redirect_uri=${_callBack}&state=${newState}`;

  return (
    <React.Fragment>
      <a href={NAVER_AUTH_URL}>
        <span>네이버로그인</span>
      </a>
    </React.Fragment>
  );
};

export default Naver;