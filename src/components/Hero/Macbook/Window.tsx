import React from "react";

import {
  MotionStyle,
  TargetAndTransition,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { DesktopElement } from "./styles";

type Position = { start: number; finish: number };

type Props = {
  style: MotionStyle;
  positionX: Position;
  positionY: Position;
  image: string;
  whileHover: TargetAndTransition;
};

const Window: React.FC<Props> = ({
  style = {},
  positionX,
  positionY,
  image,
  whileHover = {},
}) => {
  const { scrollYProgress } = useViewportScroll();

  const TranslateX = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [positionX.start, positionX.finish]
  );
  const TranslateY = useTransform(
    scrollYProgress,
    [0.038, 0.048],
    [positionY.start, positionY.finish]
  );

  return (
    <DesktopElement
      src={image}
      whileHover={whileHover}
      style={{
        translateX: TranslateX,
        translateY: TranslateY,
        ...style,
      }}
    />
  );
};

export default Window;
