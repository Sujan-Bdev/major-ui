import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import NavItem from "./NavItem";

const navItems = ["Home", "About", "Demo"];

const Nav = styled(animated.nav)`
  width: 100%;
  height: 7rem;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.primary?"#212121":"none"}
`;

const NavBar = () => {
  const [primary, setPrimary] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setPrimary(true);
    } else {
      setPrimary(false);
    }
  };
  const items = navItems.map(item => (
    <NavItem key={item} href={`#${item}`}>
      {item}
    </NavItem>
  ));

  return (
    <div id={"Home"}>
      <Nav primary = {primary}>{items}</Nav>
    </div>
  );
};

export default NavBar;

