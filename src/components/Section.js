import React from "react";
import styled from "styled-components";

const Sect = styled.section`
  width: 100%;
  height: 100vh;
  background: ${props => props.color};
  background-size: cover;
`;

const Section = (props) => {
  return (
    <div>
      <Sect color = {props.color} />
    </div>
  );
};

export default Section;
