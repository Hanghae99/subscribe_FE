import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { width, height, onChange } = props;
  const styles = { width, height };
  return <InfoInput {...styles} onChange={onChange}></InfoInput>;
};

const InfoInput = styled.input`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
`;

export default Input;
