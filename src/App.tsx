import React from "react";
import GlobalStyles from "./styles/global";

import Hero from "./components/Hero";
import Filler from "./components/Filler";

function App() {
  return (
    <div style={{ height: "2820vh" }}>
      <GlobalStyles />
      <Hero />
      <Filler />
    </div>
  );
}

export default App;
