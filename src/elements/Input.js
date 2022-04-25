import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { width, height, name, type, onChange } = props;
  const styles = { width, height };
  return (
    <InfoInput
      {...styles}
      onChange={onChange}
      name={name}
      type={type}
    ></InfoInput>
  );
};

const InfoInput = styled.input`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
`;

export default Input;
