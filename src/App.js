import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import ImageLoader from './components/ImageLoader';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Section reference={"About"} color={"#8defb9"} >
          <About/>
        </Section>
      <Section reference={"Demo"} color={"#fff"}>
        <ImageLoader />
      </Section>
    </div>
  );
};

export default App;
