import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  return (
    <div>
      <Header />
      <Section/>
      <Section reference={"About"} color = {"#8defb9"}/>
      <Section reference={"Demo"} color = {"#fff"}/>
    </div>
  );
};

export default App;
