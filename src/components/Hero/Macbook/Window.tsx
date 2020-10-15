import React from "react";

import { MotionStyle, useTransform, useViewportScroll } from "framer-motion";
import { DesktopElement } from "./styles";

type Position = { start: number; finish: number };

type Props = {
  style: MotionStyle;
  positionX: Position;
  positionY: Position;
  image: string;
  desktopRef: React.RefObject<Element>;
};

const Window: React.FC<Props> = ({
  style = {},
  positionX,
  positionY,
  image,
  desktopRef,
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
      drag
      dragConstraints={desktopRef}
      dragMomentum={false}
      whileTap={{ zIndex: 10 }}
      src={image}
      style={{
        translateX: TranslateX,
        translateY: TranslateY,
        cursor: "grab",
        ...style,
      }}
    />
  );
};

export default Window;
