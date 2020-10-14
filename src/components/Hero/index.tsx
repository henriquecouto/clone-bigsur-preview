import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import { Container, Desktop, Title } from "./styles";
import desktopImg from "../../assets/hero_desktop.jpg";

const Hero: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const desktopScale = useTransform(scrollYProgress, [0, 0.05], [1.2, 0.5]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.002], [1, 0]);
  const desktopTranslateY = useTransform(
    scrollYProgress,
    [0.05, 0.1],
    [0, -1000]
  );

  return (
    <Container>
      <Desktop
        src={desktopImg}
        style={{ scale: desktopScale, translateY: desktopTranslateY }}
      />
      <Title style={{ opacity: titleOpacity }}>
        <h2 className="white">macOS</h2>
        <h1 className="white">Big Sur</h1>
      </Title>
    </Container>
  );
};

export default Hero;
