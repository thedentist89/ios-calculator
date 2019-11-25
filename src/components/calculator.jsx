import React, { Component } from "react";
import NumPad from "./numPad";
import Display from "./display";
import styled from "styled-components";
import phone from "../phone.png";
import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

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
    display: "0",
    result: ""
  };

  handleClick = ({ currentTarget: input }) => {
    let display = this.state.display.replace(/^[0{1,}+/*-]/gi, "");
    this.setState({ result: "" });
    display += input.value;
    this.setState({ display });
  };

  handleReset = () => {
    this.setState({ display: "0", result: "" });
  };

  handleEquals = () => {
    let display = this.state.display;
    const result = math.evaluate(display);
    this.setState({ result: `${result}`, display: "0" });
  };

  handleErace = () => {
    let display = this.state.display;
    const eraced = display.substring(0, display.length - 1);
    this.setState({ display: eraced });
  };

  handleHundred = () => {
    let display = this.state.display;
    let divided = math.evaluate(display / 100);
    this.setState({ display: divided });
  };

  render() {
    return (
      <Wrapper>
        <Display
          display={this.state.display}
          result={this.state.result}
        ></Display>
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
