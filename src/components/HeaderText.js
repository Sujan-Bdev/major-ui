import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%
    transform: translate(-50%, -50%);
    text-align: center; 
`;

const Title = styled.h1`
  display: block;
  color: #9CCC65;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: 0.1rem;
  font-size: 6rem;
  font-weight: 300;
  animation: header-animation 1.3s ease-out;
  backface-visibility: none;
  
  
  
  @keyframes header-animation{
        0%{
            transform: translateX(-100%);
            opacity: 0;
        }
        
        80%{
            transform: translateX(5%);
            opacity: 1;
        }
        
        100%{
            transform: translateX(0%);
            opacity: 1;
        }
  }
`;

const Subtitle = styled.h2`
  display: block;
  text-transform: uppercase;
  font-size: 3.3rem;
  color: #9e9e9e;
  font-weight: 300;
  letter-spacing: -0.1rem;
  animation: subtitle-animation 1.2s ease-out;
  
   @keyframes subtitle-animation{
        0%{
            transform: translateX(100%);
            opacity: 0;
        }
        
        80%{
            transform: translateX(-5%);
            opacity: 1;
        }
        
        100%{
            transform: translateX(0%);
            opacity: 1;
        }
  }
  
`;

const HeaderText = () => {

  return (
    <Wrapper>
      <Title id="title" >Building Footprint Extraction</Title>
      <Subtitle>From Satellite Imagery</Subtitle>
    </Wrapper>
  );
};

export default HeaderText;
