import React from "react";
import Grid from "./Grid";
import Icon from "./Icon";
import Progress from "./Progress";

const Profile = (props) => {
  return (
    <Grid
      width="240px"
      height="60px"
      border="1px solid black"
      radius="12px"
      margin="0 auto"
      isFlex
    >
      <Grid width="214px" height="45px" isFlex margin="7.5px auto">
        <Grid width="40px" height="40px">
          <Progress width="40px" height="40px">
            <Icon width="34px" height="34px" margin="0 auto" />
          </Progress>
        </Grid>
        <Grid width="198px" height="45px" margin="0 0 0 10px">
          <div>
            <Grid
              width="53px"
              height="19px"
              border="1px solid green"
              bgColor="#ffffff"
              textAlign
              lineHeight="19px"
              radius="10px"
            >
              lv.100
            </Grid>
            <p
              style={{
                width: "166px",
                heigh: "22px",
                margin: "4px 0",
              }}
            >
              가나다라마바사
            </p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
