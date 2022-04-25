import React from "react";
import styled from "styled-components";
import Grid from "./Gird";

const Input = (props) => {
  const { width, height, name, type, border, _onChange, placeholder, label } =
    props;
  const styles = { width, height, border };

  return (
    <Grid>
      {label && <div>{label}</div>}
      <InfoInput
        {...styles}
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
      />
    </Grid>
  );
};

Input.defaultProps = {
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  _onChange: () => {},
  type: "text",
  border: "1px solid #212121",
};

const InfoInput = styled.input`
  border: ${(props) => props.border};
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
`;

export default Input;
