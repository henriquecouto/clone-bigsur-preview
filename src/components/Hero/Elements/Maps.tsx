import React from "react";

import { MapsImage } from "../styles";
import mapsImg from "../../../assets/hero_map.png";
import { useTransform, useViewportScroll } from "framer-motion";

const Maps: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const controlCenterTranslateX = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [-300, 0]
  );
  const controlCenterTranslateY = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [-600, 0]
  );

  return (
    <MapsImage
      src={mapsImg}
      whileHover={{ scale: 1.1, rotateX: 5, rotateY: 15, zIndex: 10 }}
      style={{
        translateX: controlCenterTranslateX,
        translateY: controlCenterTranslateY,
      }}
    />
  );
};

export default Maps;
