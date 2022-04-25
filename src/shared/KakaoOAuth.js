const CLIENT_ID = '7e0e932177f25c237ca90728893d9a21';
const REDIRECT_URI = 'http://localhost:3000/user/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;