import React from "react";

import { Container } from "./styles";
import { ControlCenter, Desktop, Dock, Title, Maps, Bitmap } from "./Elements";

const Hero: React.FC = () => {
  return (
    <Container>
      <Desktop>
        <Dock />
        <ControlCenter />
        <Maps />
        <Bitmap />
      </Desktop>
      <Title />
    </Container>
  );
};

export default Hero;
