import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { width, height, margin, border, radius, isFlex, padding } = props;
  const styles = {
    width,
    height,
    margin,
    border,
    radius,
    isFlex,
    padding,
  };

  return <Box {...styles}>{props.children}</Box>;
};

const Box = styled.div`
  box-sizing: border-box;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : null)}
    ${(props) => (props.padding ? `padding: ${props.padding};` : null)}
    ${(props) => (props.border ? `border: ${props.border};` : null)}
    ${(props) =>
    props.isFlex
      ? `display:flex; align-items:center; justify-content: space-between`
      : null}
`;

export default Grid;
