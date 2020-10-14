import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import { ControlCenterImage } from "../styles";
import controlCenterImg from "../../../assets/hero_control_center.png";

const ControlCenter: React.FC = () => {
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

export default ControlCenter;
