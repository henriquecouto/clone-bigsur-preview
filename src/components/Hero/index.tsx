import React from "react";

import { Container } from "./styles";
import {
  ControlCenter,
  Desktop,
  Dock,
  Title,
  Maps,
  Bitmap,
  Safari,
} from "./Elements";

const Hero: React.FC = () => {
  return (
    <Container>
      <Desktop>
        <Dock />
        <div
          style={{
            width: 0,
            height: 0,
            position: "relative",
          }}
        >
          <ControlCenter />
          <Maps />
          <Safari />
          <Bitmap />
        </div>
      </Desktop>
      <Title />
    </Container>
  );
};

export default Hero;
