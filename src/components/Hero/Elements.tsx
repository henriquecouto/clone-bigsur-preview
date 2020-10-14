import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import {
  DesktopContainer,
  DesktopImage,
  HardwareImage,
  DockImage,
  ControlCenterImage,
} from "./styles";
import desktopImg from "../../assets/hero_desktop.jpg";
import hardwareImg from "../../assets/hero_hardware.png";
import dockImg from "../../assets/hero_dock.png";
import controlCenterImg from "../../assets/hero_control_center.png";

export const Desktop: React.FC = ({ children }) => {
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

export const Dock: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const dockOpacity = useTransform(scrollYProgress, [0.047, 0.05], [0, 1]);
  const dockScale = useTransform(scrollYProgress, [0.047, 0.05], [1.2, 1]);

  return (
    <DockImage
      src={dockImg}
      style={{ opacity: dockOpacity, scale: dockScale }}
    />
  );
};

export const ControlCenter: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

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
    <ControlCenterImage
      src={controlCenterImg}
      style={{
        translateX: controlCenterTranslateX,
        translateY: controlCenterTranslateY,
      }}
    />
  );
};
