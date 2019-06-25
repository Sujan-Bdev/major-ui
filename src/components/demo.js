import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import lottie from 'lottie-web';

const Title = styled(animated.h1)`
  color: white;
  text-align: center;
  font-family: "Roboto", sans-serif;
  text-transform: capitalize;
  font-size: 3.84em;
  margin-top: 100px;
  background-color: transparent;
`;

const SubTitle = styled(animated.h2)`
  color: rgb( 237, 240, 146 );
  width: 80%;
  margin-left: auto;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Button = styled(animated.a)`
  background: linear-gradient(to bottom right, blue, cyan);
  color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  padding: 10px 30px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  display: inline-block;

  ::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 40px;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(to bottom right, cyan, blue);
    transition: all 0.3s;
  }

  :hover::after {
    transform: scale(1.6);
    opacity: 0;
  }
`;

const Demo = () => {
  const [propsButton, setButton] = useSpring(() => ({
    transform: "translateY(60px)",
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
    opacity: 0,
    config: {
      tension: 100,
      friction: 20
    }
  }));
  useEffect(() => {
    setButton({
      transform: "translateY(0px)",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      opacity: 1
    });
    let titleAnimation = lottie.loadAnimation({
      container: document.getElementById("title"),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path:"/data.json"
    });
    let subTitle = lottie.loadAnimation({
      container: document.getElementById("subtitle"),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path:"/data1.json"
    });
    let downAnimation = lottie.loadAnimation({
      container: document.getElementById("down"),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path:"/down.json"
    });
    downAnimation.setSpeed(0.8);
    return () => {
      titleAnimation.destroy();
      subTitle.destroy();
      downAnimation.destroy();
    }
  }, []);
  const slideRight = useSpring({
    config: {
      tension: 35,
      friction: 8
    },
    transform: "translateX(0px)",
    opacity: 1,
    from: {
      transform: "translateX(-300px)",
      opacity: 0
    }
  });
  const slideLeft = useSpring({
    config: {
      tension: 35,
      friction: 8
    },
    transform: "translateX(0px)",
    opacity: 1,
    from: {
      transform: "translateX(300px)",
      opacity: 0
    }
  });
  return (
    <>
      <Title id="title" style={slideRight}/>
      <SubTitle id='subtitle' style={slideLeft}/>
      <div style={{ textAlign: "center" }}>
        <Button
          style={propsButton}
          onMouseEnter={() =>
            setButton({
              transform: "translateY(-3px)",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)"
            })
          }
          onMouseLeave={() =>
            setButton({
              transform: "translateY(0px)",
              boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"
            })
          }
          onClick={() => {
            setButton({
              transform: "translateY(-1px)",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)"
            });
          }}
          href={"#Demo"}
        >
          Demo
        </Button>
        <div style={{height: 80}} id="down"/>
      </div>
    </>
  );
};

export default Demo;
