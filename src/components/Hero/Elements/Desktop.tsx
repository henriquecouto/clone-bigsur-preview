import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import { DesktopContainer, DesktopImage, HardwareImage } from "../styles";
import desktopImg from "../../../assets/hero_desktop.jpg";
import hardwareImg from "../../../assets/hero_hardware.png";

const Desktop: React.FC = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const desktopScale = useTransform(scrollYProgress, [0, 0.05], [2.5, 1]);
  const desktopTranslateY = useTransform(
    scrollYProgress,
    [0.05, 0.1],
    [0, -1000]
  );
  return (
    <DesktopContainer
      style={{ scale: desktopScale, translateY: desktopTranslateY }}
    >
      <HardwareImage src={hardwareImg} />
      <DesktopImage src={desktopImg} />
      {children}
    </DesktopContainer>
  );
};

export default Desktop;
