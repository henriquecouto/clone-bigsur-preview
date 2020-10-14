import React from "react";

import { Container } from "./styles";
import { ControlCenter, Desktop, Dock, Title, Maps } from "./Elements";

const Hero: React.FC = () => {
  return (
    <Container>
      <Desktop>
        <Dock />
        <ControlCenter />
        <Maps />
      </Desktop>
      <Title />
    </Container>
  );
};

export default Hero;
