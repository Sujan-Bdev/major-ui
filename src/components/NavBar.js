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
  border-top: 0.2px solid;
  border-bottom: 0.2px solid;
  border-color: white;
  height: 80px;
  box-sizing:border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const NavBar = () => {
  const [propsColor, setColor] = useSpring(() => ({
    borderColor: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.99)'
  }));

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setColor({
        borderColor: 'black',
        backgroundColor: 'rgba(0, 0, 0, 0.99)'
      });
    }
    else {
      setColor({
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.99)'
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