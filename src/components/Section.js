import React from "react";
import styled from "styled-components";

const Sect = styled.section`
  width: 100%;
  height: 100vh;
  background: ${props => props.color};
  background-size: cover;
`;

const Section = ({color, reference}) => {
  return (
    <div>
      <Sect id={reference} color = {color} />
    </div>
  );
};

export default Section;
