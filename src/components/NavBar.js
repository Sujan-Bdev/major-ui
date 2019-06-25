import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';
import NavItem from './NavItem';

const navItems = ["Home", "About", "Demo"];

const Nav = styled(animated.nav)`
  width: 100%;
  border-top: 0.2px solid;
  border-bottom: 0.2px solid;
  border-color: white;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const NavBar = () => {
  const [propsColor, setColor] = useSpring(() => ({
    borderColor: 'white'
  }));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setColor({
        borderColor: 'black'
      });
    }
    else {
      setColor({
        borderColor: 'white'
      });
    }
  }
  const items = navItems.map(item => <NavItem key={item} href={`#${item}`}>{item}</NavItem>);
  return (
    <div>
      <Nav style={propsColor}>{items}</Nav>
    </div>
  );
};

export default NavBar;
