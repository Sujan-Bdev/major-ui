import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import lottie from "lottie-web";

const Wrapper = styled.div`
    position:absolute;
    top: 45%;
    left: 30%;
    translate: transition(-50, -50);
    font-size: 3rem;
    text-align: center;
`;

const Title = styled.h1`
  display: block;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 6rem;
  font-size: 4rem;
  font-weight: 400;
  margin-right: -3.5rem;
`;

const SubTitle = styled(Title)`
  font-size: 2rem;
  font-weight: 700;
  margin-right: -1.75rem;
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
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/data.json"
    });
    let subTitle = lottie.loadAnimation({
      container: document.getElementById("subtitle"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/data1.json"
    });
    let downAnimation = lottie.loadAnimation({
      container: document.getElementById("down"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/down.json"
    });
    downAnimation.setSpeed(0.8);
    return () => {
      titleAnimation.destroy();
      subTitle.destroy();
      downAnimation.destroy();
    };
  }, []);

  const slideRight = useSpring({
    config: {
      tension: 35,
      friction: 8
    },
    transform: "translateX(0px)",
    opacity: 1,
    from: {
      transform: "translateX(-100px)",
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
    <Wrapper>
      <Title id="title" style={slideRight} />
      <SubTitle id="subtitle" style={slideLeft} />
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
        <div style={{ height: 80 }} id="down" />
      </div>

    </Wrapper>

  );
};

export default Demo;
