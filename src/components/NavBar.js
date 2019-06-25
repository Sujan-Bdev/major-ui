import React, { useEffect, useState } from "react";
import styled from "styled-components";

const navItems = ["Home", "About", "Demo"];

const Nav = styled.nav`
  border-top: 0.2px solid
    ${props => (props.primary ? "rgb(246, 246, 239)" : "rgb(0, 0, 0)")};
  border-bottom: 0.2px solid
    ${props => (props.primary ? "rgb(246, 246, 239)" : "rgb(0, 0, 0)")};
    
  width: 100%;
  height: 80px;
  box-sizing:border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: ${props => (props.primary ? "none" : "white")};
`;

const NavItem = styled.a`
  list-style-type: none;
  text-decoration: none;
  color: ${props => (props.primary ? "white" : "black")};
  padding: 30px;

  :hover {
    color: orange;
  }
`;

const NavBar = () => {
  const [primary, setPrimary] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 390) {
      setPrimary(false);
    } else {
      setPrimary(true);
    }
  };
  const items = navItems.map(item => (
    <NavItem primary={primary} key={item} href={`#${item}`}>
      {item}
    </NavItem>
  ));
  return (
    <div>
      <Nav primary={primary}>{items}</Nav>
    </div>
  );
};

export default NavBar;
