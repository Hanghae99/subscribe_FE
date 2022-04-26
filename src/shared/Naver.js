import React from 'react';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Naver = (props) => {
  const dispatch = useDispatch();

  // 인가코드 받기
  let code = new URL(window.location.href).searchParams.get('code');

  React.useEffect(() => {

    console.log(code)
    dispatch(userActions.naverLogin(code));
  }, []);

  return (
    <React.Fragment>
      연결 화면 테스트
    </React.Fragment>
  );

}

export default Naver;