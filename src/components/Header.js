import React from "react";
import Grid from "../elements/Grid";
import Input from "../elements/Input";
import { useNavigate } from "react-router";
import Profile from "../elements/Profile";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid bg="#E9E9E9">
      <Grid
        border="1px solid black"
        maxWidth="1920px"
        height="80px"
        margin="0 auto"
        isFlex
      >
        <Grid
          maxWidth="1218px"
          border="1px solid red"
          margin="0 0 0 24px"
          isFlex
        >
          <Grid
            maxWidth="140px"
            height="32px"
            border="1px solid green"
            bg="#fff"
            padding="4px 0 4px 11px"
            fontSize="20px"
            lineHeight="24px"
          >
            LOGO
          </Grid>
          <Grid width="562px">
            <Input
              width="562px"
              height="32px"
              margin="22px 0 0 0"
              padding="2px 0 0 36px"
              placeholder="검색"
            />
          </Grid>
        </Grid>
        <Grid maxWidth="242px" border="1px solid blue" margin="0 24px 0 0">
          <Profile />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
