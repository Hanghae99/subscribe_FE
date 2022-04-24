import React from "react";
import Grid from "./../elements/Gird";
import Input from "../elements/Input";
import Button from "./../elements/Button";

const Login = () => {
  return (
    <Grid width="200px" height="200px" border="1px solid black" margin="0 auto">
      <Input />
      <Input />
      <Button width="100px" height="100px">
        로그인하실?
      </Button>
    </Grid>
  );
};

export default Login;
