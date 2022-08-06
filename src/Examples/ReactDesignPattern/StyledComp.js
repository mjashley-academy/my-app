import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;
const Wrapper = styled.section`
  padding: 4em;
  background-color: greenyellow;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "yellow" : "white")};
  color: ${(props) => (props.primary ? "green" : "red")};
  font-size: 1.5em;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  display: block;
`;
const BlueButton = styled(Button)`
  color: blue;
  border: none;
  background-color: greenyellow;
`;
export default class StyledComp extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Hello World!</Title>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <BlueButton as="a" href="#">Extending</BlueButton>
      </Wrapper>
    );
  }
}
