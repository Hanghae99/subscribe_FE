# 설치한 라이브러리

- yarn add axios
- yarn add react-responsive
- yarn add react-circular-progressbar
- yarn add react-google-login

# 04 25 작업

- elements 요소들 props 추가, 스타일 약간 변경
- login 페이지 반응형 테스트
- 카카오 소셜 로그인 구현
- Header의 Profile : react-circular-progressbar 라이브러리를 활용한 원형 프로그레스바 제작

# 04 26 작업

- elements 요소들 props 추가
- 구글, 네이버 소셜 로그인 1차 작업

# 04 28 작업

- 소셜 로그인 서버와 연결까지 완료 (카카오, 네이버, 구글)
- 소셜 로그인 api 코드 api.js 파일에 통합
- components 폴더의 파일들 한번에 import 가능하게 component.js 생성
- 카카오 지도 띄우기, 검색 1차 작업

# trouble shooting

- 0428
  - 카카오지도 검색 기능에서 검색어 state 초기 값을 null로 두면 400 에러 발생
  - 지도 검색 시, 초기 설정 지도가 겹쳐보이는 현상
    - 해결 방법: 지도 생성 함수와 키워드 검색 함수를 하나의 useEffect에서 관리하면서 나온 문제, 두개로 나누어 관리하면 해결된다
