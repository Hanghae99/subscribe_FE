import React from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Grid from "../elements/Gird";

const SignUp = () => {
  return (
    <Grid width="200px" height="400px" border="1px solid black" margin="0 auto">
      email
      <Input />
      Password
      <Input />
      pwcheck
      <Input />
      <Button width="170px" height="30px" margin="0 0 5px 0">
        로그인 화면 가실?
      </Button>
      <Button width="170px" height="30px">
        회원가입 정말 하실?
      </Button>
    </Grid>
  );
};

export default SignUp;
