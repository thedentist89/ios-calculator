import React from "react";
import styled, { css } from "styled-components";

const Pad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin: 5px;
  font-size: 20px;
  background-color: #323232;
  border-radius: 100px;
  color: #fff;

  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid #fff;
  }

  &:active {
      background-color: rgba(256, 256, 256, 0.7);
  }

  ${props =>
    props.orange &&
    css`
      background-color: #fb9424;
    `}

  ${props =>
    props.light &&
    css`
      background-color: #a6a6a6;
      color: #000;
      font-size: 18px;
    `}

    ${props =>
      props.wide &&
      css`
        width: 90px;
        text-align: left;
        padding-left: 18px;
      `}
`;

const NumPad = ({ onNumType, onReset, onEquals, onErace, onHundred }) => {
  return (
    <Pad>
      <div>
        <Button light onClick={onReset}>
          AC
        </Button>
        <Button light onClick={onErace}>
          C
        </Button>
        <Button light onClick={onHundred}>
          %
        </Button>
        <Button orange onClick={onNumType} value="/">
          &divide;
        </Button>
      </div>
      <div>
        <Button onClick={onNumType} value="7">
          7
        </Button>
        <Button onClick={onNumType} value="8">
          8
        </Button>
        <Button onClick={onNumType} value="9">
          9
        </Button>
        <Button orange onClick={onNumType} value="*">
          x
        </Button>
      </div>
      <div>
        <Button onClick={onNumType} value="4">
          4
        </Button>
        <Button onClick={onNumType} value="5">
          5
        </Button>
        <Button onClick={onNumType} value="6">
          6
        </Button>
        <Button orange onClick={onNumType} value="+">
          +
        </Button>
      </div>
      <div>
        <Button onClick={onNumType} value="1">
          1
        </Button>
        <Button onClick={onNumType} value="2">
          2
        </Button>
        <Button onClick={onNumType} value="3">
          3
        </Button>
        <Button orange onClick={onNumType} value="-">
          -
        </Button>
      </div>
      <div>
        <Button wide onClick={onNumType} value="0">
          0
        </Button>
        <Button onClick={onNumType} value=".">
          .
        </Button>
        <Button orange onClick={onEquals}>
          =
        </Button>
      </div>
    </Pad>
  );
};

export default NumPad;
