import React from "react";

import { Container } from "./styles";
import { ControlCenter, Desktop, Dock, Title } from "./Elements";

const Hero: React.FC = () => {
  return (
    <Container>
      <Desktop>
        <Dock />
        <ControlCenter />
      </Desktop>
      <Title />
    </Container>
  );
};

export default Hero;
