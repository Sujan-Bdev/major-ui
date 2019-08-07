import React from 'react';
import styled from 'styled-components';

const HorLine = styled.div`
    margin-top: 20px;
       width: 100%;
    border: 1px solid black;
`;

const Line = () => {
    return (
        <div>
            <HorLine/>
        </div>
    );
};

export default Line;