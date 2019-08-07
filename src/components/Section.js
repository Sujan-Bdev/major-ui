import React from "react";
import styled from "styled-components";

const Sect = styled.section`
  width: 100%;
  height: ${props => props.size||85 + 'vh'};
  background: ${props => props.color};
  background-size: cover;
  color: #000;
`;

const Section = ({ color, reference, children, size }) => {
  return (
    <div>
      <Sect id={reference} color={color} size = {size} >
        {children}
      </Sect>
    </div>
  );
};

export default Section;
