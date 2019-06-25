import React from "react";
import styled from "styled-components";
import bkg from "../assets/images/village-1784455_1920.jpg";
import Demo from "./demo";
import NavBar from "./NavBar";

const Cover = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bkg});
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
          <Demo/>
      </Cover>
    </div>
  );
};

export default Header;
