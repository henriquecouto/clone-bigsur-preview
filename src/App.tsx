import React from "react";
import GlobalStyles from "./styles/global";

import Hero from "./components/Hero";
import Filler from "./components/Filler";
import Clock from "./components/Clock";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div style={{ height: "2820vh" }}>
      <GlobalStyles />
      <TopBar />
      <Hero />
      <Filler />
      <Clock />
    </div>
  );
}

export default App;
