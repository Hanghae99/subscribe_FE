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

  return (
    <Box {...styles}>
      <CircularProgressbarWithChildren
        value={66}
        styles={buildStyles({ pathColor: "black" })}
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
