import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 30px;
    color: white;
    background: OrangeRed;
    `;



const NavBar = () => {
    return (
        <div>
            <Button>Click</Button>
        </div>
    );
};

export default NavBar;