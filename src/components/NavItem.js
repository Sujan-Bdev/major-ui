import React, { useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Item = styled(animated.a)`
  list-style-type: none;
  text-decoration: none;
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  padding: 0 3rem;
`;

export default function({ children, href }) {
  const [propsColor, setColor] = useSpring(() => ({
    color: "#ccc"
  }));
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setColor({
        color: "#ccc"
      });
    } else {
      setColor({
        color: "white"
      });
    }
  };
  const handleMouseEnter = () => {
    setColor({
      color: "orange"
    });
  };

  return (
    <Item
      href={href}
      style={propsColor}
      onMouseLeave={handleScroll}
      onMouseEnter={handleMouseEnter}
    >
      {children}
    </Item>
  );
}
