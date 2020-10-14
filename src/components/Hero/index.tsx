import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import { Container, Title } from "./styles";
import { ControlCenter, Desktop, Dock } from "./Elements";

const Hero: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const titleOpacity = useTransform(scrollYProgress, [0, 0.002], [1, 0]);

  return (
    <Container>
      <Desktop>
        <Dock />
        <ControlCenter />
      </Desktop>
      <Title style={{ opacity: titleOpacity }}>
        <h2 className="white">macOS</h2>
        <h1 className="white">Big Sur</h1>
      </Title>
    </Container>
  );
};

export default Hero;
