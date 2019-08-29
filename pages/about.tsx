import React, { Component } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 30px;
  font-family: "Pangram", sans-serif;
  color: ${props => props.theme.PRIMARY};
`;

export default class About extends Component {
  render() {
    return (
      <Layout>
        <Title>About</Title>
        <p>This is the about page</p>
        <div >Hello World!</div>
      </Layout>
    );
  }
}
