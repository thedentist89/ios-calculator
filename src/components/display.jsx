import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  background-color: transparent;
  height: 45px;
  width: 190px;
  color: #fff;
  text-align: right;
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`;

const Display = ({ display }) => {
  return <Input readOnly={true} value={display === "" ? 0 : display}></Input>;
};

export default Display;
