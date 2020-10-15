import React from "react";
import { Container, Image, Content } from "./styles";

import hardwareImg from "../../assets/hero_hardware.png";
import { useAnimation } from "framer-motion";

let scale = 0.08;
let translateY;
let translateX;

const scaleOptions = { 0.08: 1, 1: 0.08 } as any;
const translateOptions = {
  0.08: { x: 260, y: 280 },
  1: { x: 0, y: 0 },
} as any;

const Filler: React.FC = () => {
  const control = useAnimation();

  const increaseScale = () => {
    scale = scaleOptions[scale];
    translateY = translateOptions[scale].y;
    translateX = translateOptions[scale].x;
    control.start({ scale, translateY, translateX });
  };

  return (
    <Container>
      <Image imageUrl={hardwareImg}>
        <Content
          onClick={increaseScale}
          animate={control}
          transition={{ ease: "easeIn" }}
          style={{ scale: 0.08, translateY: 280, translateX: 260 }}
        />
      </Image>
    </Container>
  );
};

export default Filler;
