import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { width, height } = props;
  const styles = { width, height };
  return <Btn {...styles}>{props.children}</Btn>;
};

const Btn = styled.button`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : null)}
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
