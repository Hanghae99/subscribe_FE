import React from "react";
import Grid from "./../elements/Gird";
import Image from "../elements/Image";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid border="1px solid black" height="100px" isFlex>
      <Image
        width="100px"
        height="100px"
        src={require("../assets/images/아이유2.jpg")}
      />
      <Grid border="1px solid black" width="130px" isFlex>
        {/* 임시 온클릭입니다 */}
        <Grid
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </Grid>
        <Grid
          onClick={() => {
            navigate("/login");
          }}
        >
          회원가입
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
