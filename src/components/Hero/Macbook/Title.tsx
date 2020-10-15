import { useTransform, useViewportScroll } from "framer-motion";
import React from "react";

import { TitleContainer } from "./styles";

const container = {
  hidden: { opacity: 0, scale: 3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const Title: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const titleOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);
  const titleTranslateY = useTransform(
    scrollYProgress,
    [0.02, 0.03],
    [0, -1000]
  );

  return (
    <TitleContainer
      style={{ opacity: titleOpacity, translateY: titleTranslateY }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h2>macOS</h2>
      <h1>Big Sur</h1>
    </TitleContainer>
  );
};

export default Title;
