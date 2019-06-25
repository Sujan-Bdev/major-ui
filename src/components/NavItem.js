import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useSpring, animated } from 'react-spring';

const Item = styled(animated.a)`
  list-style-type: none;
  text-decoration: none;
  font-size: 40px;
  padding: 30px;
  color: white;
`;

export default function({children, href}) {
  const [propsColor, setColor] = useSpring(() => ({
    color: 'white'
  }));
  useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setColor({
        color: 'black'
      });
    }
    else {
      setColor({
        color: 'white'
      });
    }
  }
  const handleMouseEnter = () => {
    setColor({
      color: 'orange'
    })
  }

  return (
    <Item href={href} style={propsColor} onMouseLeave={handleScroll} onMouseEnter={handleMouseEnter}>{children}</Item>
  );
}
