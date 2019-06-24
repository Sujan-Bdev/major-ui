import React, {useRef} from "react";
import Demo from "./components/demo";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Header from "./components/Header";
import {useSpring, animated} from 'react-spring';

const App = () => {
  const refs = useRef();
  const props = useSpring({
    from: {
      scroll: 0
    },
    scroll: 1000
  })
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default App;
