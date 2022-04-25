import React from "react";
import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progress = (props) => {
  const { width, height, percent } = props;
  const styles = { width, height };
  const percentage = 66;
  return (
    <Box {...styles}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          pathColor: "black",
          trailColor: `rgba(255, 255, 255, ${percentage / 100})`,
        })}
      >
        {props.children}
      </CircularProgressbarWithChildren>
    </Box>
  );
};

const Box = styled.div`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
`;

export default Progress;
