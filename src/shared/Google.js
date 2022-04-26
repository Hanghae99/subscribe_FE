import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

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
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}