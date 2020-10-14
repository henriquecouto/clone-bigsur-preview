import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import {
  Container,
  DesktopContainer,
  Title,
  DesktopImage,
  HardwareImage,
  DockImage,
  ControlCenterImage,
} from "./styles";
import desktopImg from "../../assets/hero_desktop.jpg";
import hardwareImg from "../../assets/hero_hardware.png";
import dockImg from "../../assets/hero_dock.png";
import controlCenterImg from "../../assets/hero_control_center.png";

const Hero: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const titleOpacity = useTransform(scrollYProgress, [0, 0.002], [1, 0]);

  const desktopScale = useTransform(scrollYProgress, [0, 0.05], [2.5, 1]);
  const desktopTranslateY = useTransform(
    scrollYProgress,
    [0.05, 0.1],
    [0, -1000]
  );

  const dockOpacity = useTransform(scrollYProgress, [0.047, 0.05], [0, 1]);
  const dockScale = useTransform(scrollYProgress, [0.047, 0.05], [1.2, 1]);

  const controlCenterTranslateX = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [400, 0]
  );
  const controlCenterTranslateY = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [-400, 0]
  );

  return (
    <Container>
      <DesktopContainer
        style={{ scale: desktopScale, translateY: desktopTranslateY }}
      >
        <HardwareImage src={hardwareImg} />
        <DesktopImage src={desktopImg} />
        <DockImage
          src={dockImg}
          style={{ opacity: dockOpacity, scale: dockScale }}
        />
        <ControlCenterImage
          src={controlCenterImg}
          style={{
            translateX: controlCenterTranslateX,
            translateY: controlCenterTranslateY,
          }}
        />
      </DesktopContainer>
      <Title style={{ opacity: titleOpacity }}>
        <h2 className="white">macOS</h2>
        <h1 className="white">Big Sur</h1>
      </Title>
    </Container>
  );
};

export default Hero;
