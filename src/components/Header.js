import React from "react";
import styled from "styled-components";
import bkg from "../assets/images/village-1784455_1920.jpg";
import NavBar from "./NavBar";
import HeaderText from "./HeaderText";

const Cover = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(to right top, rgba(0, 0, 0,0.87), rgba(0, 0, 0,0.87)),
    url(${bkg}) center; 
  background-size: cover;
  background-position: left 10% bottom 20%;
  background-repeat: no-repeat;
  position: relative;
`;

const Header = () => {
  return (
    <div>
      <Cover>
        <NavBar/>
        <HeaderText/>
      </Cover>
    </div>
  );
};

export default Header;
