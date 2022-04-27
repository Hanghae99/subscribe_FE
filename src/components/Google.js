import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// react-google-login 라이브러리 사용해서, 서버없이도 리액트에서 로그인 방법 인것 같음
// 서버랑 연결하지 않아도 토큰, 유저정보가 다 넘어옴
// 서버와 연결해서 로그인해야해서 이 페이지는 사용하지 않을 예정

const clientId = "77683946484-86n78jead6i4agakkjdf3482c3609des.apps.googleusercontent.com";

export default function Google({ onGoogleLogin }){
    const dispatch = useDispatch();

    const onSuccess = async(response) => {
        // const { googleId, profileObj : { email, name } } = response;
        
        dispatch(userActions.googleLogin(response));
        // await onGoogleLogin (
        //   console.log(response)
        // );
    }
    const onFailure = (error) => {
        console.log('구글 로그인 에러 :: ', error);
    }
    return(
        <React.Fragment>
          연결 화면 테스트
        </React.Fragment>
    )
}