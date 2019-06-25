import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';
import NavItem from './NavItem';

const navItems = ["Home", "About", "Demo"];

const Nav = styled(animated.nav)`
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  background-color: rgba(255, 255, 255);
  border-top: 0.2px solid;
  border-bottom: 0.2px solid;
  border-color: white;
  height: 80px;
  box-sizing:border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const NavBar = () => {
  const [propsColor, setColor] = useSpring(() => ({
    borderColor: 'white',
    backgroundColor: 'white'
  }));

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setColor({
        borderColor: 'black',
        backgroundColor: 'black'
      });
    }
    else {
      setColor({
        borderColor: 'white',
        backgroundColor: 'white'
      });
    }
  }
  const items = navItems.map(item => <NavItem key={item} href={`#${item}`}>{item}</NavItem>);

  return (
    <div id={"Home"}>
      <Nav style={propsColor}>{items}</Nav>
    </div>
  );
};

export default NavBar;


/*

  border-top: 0.2px solid
    ${props => (props.primary ? "rgb(246, 246, 239)" : "rgb(0, 0, 0)")};
  border-bottom: 0.2px solid
    ${props => (props.primary ? "rgb(246, 246, 239)" : "rgb(0, 0, 0)")};
 */