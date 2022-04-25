import React, { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { signUpDB } from "../redux/modules/user";
import { Desktop, Mobile } from "../shared/responsive";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    pw: "",
    pwCheck: "",
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const { email, pw, pwCheck } = inputs;

  const signUp = () => {
    dispatch(signUpDB({ username: email, password: pw }));
  };

  return (
    <>
      <Desktop>
        <Grid
          width="40%"
          height="400px"
          border="1px solid black"
          margin="0 auto"
        >
          <p>데스크탑 전용</p>
          email
          <Input name="email" width="50%" onChange={onChange} />
          Password
          <Input name="pw" type="password" onChange={onChange} />
          pwCheck
          <Input name="pwCheck" type="password" onChange={onChange} />
          <Button width="170px" height="30px" margin="0 0 5px 0">
            로그인 화면 가실?
          </Button>
          <Button width="170px" height="30px">
            회원가입 정말 하실?
          </Button>
        </Grid>
      </Desktop>

      <Mobile>
        <Grid
          width="100%"
          height="400px"
          border="1px solid black"
          margin="0 auto"
        >
          <p>모바일 전용</p>
          email
          <Input name="email" onChange={onChange} />
          Password
          <Input name="pw" type="password" onChange={onChange} />
          pwCheck
          <Input name="pwCheck" type="password" onChange={onChange} />
          <Button width="170px" height="30px" margin="0 0 5px 0">
            로그인 화면 가실?
          </Button>
          <Button width="170px" height="30px">
            회원가입 정말 하실?
          </Button>
        </Grid>
      </Mobile>
    </>
  );
};

export default SignUp;
