import React from "react";
import styled from "styled-components";
import img from "../assets/images/aboutImage.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

const AboutText = styled.div`
  width: 50%;
  height: 85vh;
  background: #eee;
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
  display:flex;
  justify-content:center;
  align-items:center;
`;

const AboutImgText = styled.div`
  
  width:50%;  
  text-align: center;
  height: 150px;
  border: 0.5px solid white;
`;

const Text = styled.h1`
    padding: 10px;
    margin: 10px;
    color: ${props => props.color || "white"};
    font-family: "Roberto", sans-serif;
    font-size: ${props => props.size || 30+'px' };
    text-align: center;
    text-transform: uppercase;
    
`;

const About = () => {
  return (
    <Wrapper>
      <AboutText>
          <Text color = {'black'}>Building Footprint Extraction</Text>
      </AboutText>
      <AboutImage>
        <AboutImgText>
            <Text>About</Text>
            <Text color = {"#F36347"} size = {50+'px'}>Project</Text>
        </AboutImgText>
      </AboutImage>
    </Wrapper>
  );
};

export default About;
