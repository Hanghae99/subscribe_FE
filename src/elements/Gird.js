import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { bg, width, height, maxWidth, maxHeight, margin, border, radius, isFlex, padding, onClick } =
    props;
  const styles = {
    bg,
    width,
    height,
    margin,
    border,
    radius,
    isFlex,
    padding,
    maxWidth,
    maxHeight
  };

  return (
    <Box {...styles} onClick={onClick}>
      {props.children}
    </Box>
  );
};

Grid.defaultProps = {
  width: '100%',
  height: '100%',
};

const Box = styled.div`
  box-sizing: border-box;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  // height: '100%',
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : null)}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : null)}
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
