import React from "react";
import Grid from "./../elements/Grid";
import Input from "../elements/Input";
import Button from "./../elements/Button";

const Login = (props) => {
  return (
    <Grid width="200px" height="200px" border="1px solid black" margin="0 auto">
      <Input />
      <Input />
      <Button width="170px" height="30px" margin="0 0 5px 0">
        로그인하실?
      </Button>
      <Button width="170px" height="30px">
        회원가입하실?
      </Button>
    </Grid>
  );
};

export default Login;
