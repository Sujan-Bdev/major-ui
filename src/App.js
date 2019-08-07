import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import ImageLoader from "./components/ImageLoader";
import About from "./components/About";
import Application1 from "./components/Application1";
import Next from "./components/Next";
import Application from "./components/Application";
import {Box} from "@material-ui/core";
import BuildingCount from "./components/BuildingCount";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div>
          <Header />

          <Section color={"white"} reference={"About"}>
              <About />
          </Section>

          <Section reference={"Demo"} color={"#fafafa"}>
              <ImageLoader />
          </Section>
          <Section size = { 100 + 'vh'}>
              <Application/>
          </Section>

          <Footer/>

      </div>
  );
};

export default App;
