import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import ImageLoader from "./components/ImageLoader";
import About from "./components/About";
import Application1 from "./components/Application1";
import Next from "./components/Next";
import Application from "./components/Application";

const App = () => {
  return (
    <div>
      <Header />
      <Section />
      <Section reference={"About"} color={"#8defb9"} />
      <Section reference={"Demo"} color={"#fff"}>
        <ImageLoader />
      </Section>
      <Section size = { 100 + 'vh'}>
          <Application/>
      </Section>
    </div>
  );
};

export default App;
