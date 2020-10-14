import React from "react";
import { useTransform, useViewportScroll } from "framer-motion";

import { DockImage } from "../styles";
import dockImg from "../../../assets/hero_dock.png";

const Dock: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const dockOpacity = useTransform(scrollYProgress, [0.047, 0.05], [0, 1]);
  const dockScale = useTransform(scrollYProgress, [0.047, 0.05], [1.2, 1]);

  return (
    <DockImage
      src={dockImg}
      style={{ opacity: dockOpacity, scale: dockScale }}
      whileHover={{ rotateY: 10, rotateX: -1 }}
      whileTap={{ rotateZ: 1 }}
    />
  );
};

export default Dock;
