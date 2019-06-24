import React from "react";
import styled from "styled-components";

const navItems = ["Home", "About", "Demo"];

const Nav = styled.nav`
  border-top: 0.2px solid rgb(246, 246, 239);
  border-bottom: 0.2px solid rgb(246, 246, 239);
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const NavItem = styled.a`
  list-style-type: none;
  text-decoration: none;
  color: #fff;
  padding: 30px;

  :hover {
    color: orange;
  }
`;

const NavBar = () => {
  const items = navItems.map(item => <NavItem href={`#${item}`}>{item}</NavItem>);
  return (
    <div>
      <Nav>{items}</Nav>
    </div>
  );
};

export default NavBar;
