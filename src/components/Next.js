import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #032535;
`;

const Text = styled.h1`
  padding: 10px;
    margin: 10px;
    color: darkorange;
    font-family: "Roberto", sans-serif;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
`;

const Next = () => {
    return (
        <Wrapper>
            <Text>application</Text>
        </Wrapper>
    );
};

export default Next;