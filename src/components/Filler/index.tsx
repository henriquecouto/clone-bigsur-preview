import React from "react";
import { Container, Image, Content } from "./styles";

import hardwareImg from "../../assets/hero_hardware.png";
import { useAnimation } from "framer-motion";

let scale = 0.08;
let translateY;
let translateX;

const scaleOptions = { 0.08: 1, 1: 0.08 } as any;

type WindowProps = {
  translateOptions: {
    initial: { x: number; y: number };
    final: { x: number; y: number };
  };
  background: string;
};

type scaleTypes = "initial" | "final";

const getScaleType = (scaleValue: number): scaleTypes => {
  const scaleTypes = { "0.08": "initial", "1": "final" } as any;
  return scaleTypes[scaleValue];
};

const Window: React.FC<WindowProps> = ({ translateOptions, background }) => {
  const control = useAnimation();

  const increaseScale = () => {
    scale = scaleOptions[scale];
    translateY = translateOptions[getScaleType(scale)].y;
    translateX = translateOptions[getScaleType(scale)].x;
    control.start({ scale, translateY, translateX });
  };
  return (
    <Content
      onClick={increaseScale}
      animate={control}
      transition={{ ease: "easeIn" }}
      style={{
        scale: 0.08,
        translateY: translateOptions.initial.y,
        translateX: translateOptions.initial.x,
        background,
      }}
    />
  );
};

const Filler: React.FC = () => {
  return (
    <Container>
      <Image imageUrl={hardwareImg}>
        <div style={{ width: "58%", height: 0, position: "relative" }}>
          <Window
            translateOptions={{
              initial: { x: 260, y: 250 },
              final: { x: 0, y: 0 },
            }}
            background="#0066aa"
          />
          <Window
            translateOptions={{
              initial: { x: 180, y: 250 },
              final: { x: 0, y: 0 },
            }}
            background="#00aa66"
          />
          <Window
            translateOptions={{
              initial: { x: 100, y: 250 },
              final: { x: 0, y: 0 },
            }}
            background="#00aaaa"
          />
        </div>
      </Image>
    </Container>
  );
};

export default Filler;
