const CLIENT_ID = '7e0e932177f25c237ca90728893d9a21';
const REDIRECT_URI = 'http://localhost:3000/user/kakao/callback';

const NAVER_CLIENT_ID = 'oq32J_8jgLtjcSRvYUO4';
const NAVER_CLIENT_SECRET = 'dc6LwAfBEL';
const NAVER_REDIRECT_URI = 'http://localhost:3000/user/naver/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=state`;
