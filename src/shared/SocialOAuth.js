const CLIENT_ID = '7e0e932177f25c237ca90728893d9a21';
const REDIRECT_URI = 'http://localhost:3000/user/kakao/callback';

const GOOGLE_CLIENT_ID = "77683946484-86n78jead6i4agakkjdf3482c3609des.apps.googleusercontent.com";
const GOOGLE_REDIRECT_URI = 'http://localhost:3000/user/google/callback';

const NAVER_CLIENT_ID = 'oq32J_8jgLtjcSRvYUO4';
const NAVER_CLIENT_SECRET = 'dc6LwAfBEL';
const NAVER_REDIRECT_URI = 'http://localhost:3000/user/naver/callback';

const randomString = () => {
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
const newState = randomString();

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile%20openid&access_type=offline`;
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=${newState}`;
