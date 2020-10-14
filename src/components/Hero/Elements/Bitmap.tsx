import React from "react";

import { BitmapImage } from "../styles";
import bitmapImg from "../../../assets/hero_bitmap.png";
import { useTransform, useViewportScroll } from "framer-motion";

const Bitmap: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const controlCenterTranslateX = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [-300, 0]
  );
  const controlCenterTranslateY = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [600, 0]
  );

  return (
    <BitmapImage
      src={bitmapImg}
      whileHover={{ scale: 1.1, rotateX: 5, rotateY: 15, zIndex: 10 }}
      style={{
        translateX: controlCenterTranslateX,
        translateY: controlCenterTranslateY,
      }}
    />
  );
};

export default Bitmap;
