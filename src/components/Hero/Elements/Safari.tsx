import React from "react";

import { SafariImage } from "../styles";
import safariImg from "../../../assets/hero_safari.png";
import { useTransform, useViewportScroll } from "framer-motion";

const Safari: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const controlCenterTranslateX = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [800, 0]
  );
  const controlCenterTranslateY = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [600, 0]
  );

  return (
    <SafariImage
      src={safariImg}
      whileHover={{ scale: 1.1, rotateX: 5, rotateY: 15, zIndex: 10 }}
      style={{
        translateX: controlCenterTranslateX,
        translateY: controlCenterTranslateY,
      }}
    />
  );
};

export default Safari;
