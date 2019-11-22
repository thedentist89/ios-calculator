import React, { Component } from "react";
import NumPad from "./numPad";
import Display from "./display";
import styled from "styled-components";
import phone from "../phone.png";

const Wrapper = styled.div`
  width: 250px;
  padding-top: 110px;
  padding-bottom: 100px;
  background-image: url(${phone});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000;
  border-radius: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

class Calculator extends Component {
  state = {
    display: ""
  };

  handleClick = ({ currentTarget: input }) => {
    let display = this.state.display;
    display += input.value;
    this.setState({ display: display });
  };

  handleReset = () => {
    this.setState({ display: "" });
  };

  handleEquals = () => {
    let display = this.state.display;
    const result = eval(display);
    this.setState({ display: +result });
  };

  handleErace = () => {
    let display = this.state.display;
    const eraced = display.substring(0, display.length - 1);
    this.setState({ display: eraced });
  };

  handleHundred = () => {
    let display = this.state.display;
    let divided = eval(display / 100);
    this.setState({ display: divided });
  };

  render() {
    return (
      <Wrapper>
        <Display display={this.state.display}></Display>
        <NumPad
          onNumType={this.handleClick}
          onReset={this.handleReset}
          onEquals={this.handleEquals}
          onErace={this.handleErace}
          onHundred={this.handleHundred}
        ></NumPad>
      </Wrapper>
    );
  }
}

export default Calculator;
