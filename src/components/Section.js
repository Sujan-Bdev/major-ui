import React from "react";
import styled from "styled-components";

const Sect = styled.section`
  width: 100%;
  height: 1000px;
  background: ${props => props.color};
  background-size: cover;
  color: #000;
  padding-top: 20px;
`;

const Section = ({ color, reference, children }) => {
  return (
    <div>
      <Sect id={reference} color={color} >
        {children}
      </Sect>
    </div>
  );
};

export default Section;
