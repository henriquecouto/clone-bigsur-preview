import React from "react";
import GlobalStyles from "./styles/global";

import Hero from "./components/Hero";
import Filler from "./components/Filler";
import Clock from "./components/Clock";

function App() {
  return (
    <div style={{ height: "2820vh" }}>
      <GlobalStyles />
      <Hero />
      <Filler />
      <Clock />
    </div>
  );
}

export default App;
