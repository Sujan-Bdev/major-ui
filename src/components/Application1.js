/*
 * This application section is about the number of buildings in the uploaded image
 * */

import React from "react";
import styled from "styled-components";
import img from "../assets/images/aboutImage.jpg";

const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 70vh;
  background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.6)
    );
`;

const AboutImage = styled.div`
  border: 2px solid black;
  width: 50%;
  height: 85vh;
  background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.6)
    ),
    url(${img}) center;
  background-size: cover;
  background-position: left 10% bottom 20%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
  width: 60%;
  height: 200px;
  border: 2px solid #800000;
  border-radius: 5px 40px 40px 5px;
  background-color: #49beb7;
  float: left;
`;

const Solar = styled.div`
  margin-top: 20px;
  width: 60%;
  height: 200px;
  border: 2px solid #800000;
  border-radius: 40px 0 0 40px;
  background-color: #badfdb;
  float: right;
`;

const Text = styled.h1`
  padding: 10px;
  margin: 10px;
  color: ${props => props.color || "white"};
  font-family: "Roberto", sans-serif;
  font-size: ${props => props.size || 30 + "px"};
  text-align: center;
  text-transform: uppercase;
`;

const Application1 = () => {
  return (
    <Wrapper>
      <Count>
          <Text color = {"#ca3e47"}>Count Building?</Text>
      </Count>
      <Solar>
          <Text color = {"#382039"}>Find Solar Potential?</Text>
      </Solar>
    </Wrapper>
  );
};

export default Application1;
