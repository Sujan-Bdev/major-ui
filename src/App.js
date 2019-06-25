import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  return (
    <div>
      <Header />
      <Section color = {"#8defb9"}/>
      <Section color = {"#d86efa"}/>
    </div>
  );
};

export default App;
