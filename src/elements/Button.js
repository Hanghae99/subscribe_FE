import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { width, height, margin, bgColor, onClick } = props;
  const styles = { width, height, bgColor, margin };
  return (
    <Btn onClick={onClick} {...styles}>
      {props.children}
    </Btn>
  );
};

const Btn = styled.button`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : null)}
    ${(props) => (props.bgColor ? `background-color: ${props.bgColor};` : null)}
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
