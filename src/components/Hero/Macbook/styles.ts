import { motion } from "framer-motion";
import styled from "styled-components";

export const DesktopContainer = styled(motion.div)`
  z-index: 1;
  width: 100%;
  object-fit: contain;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled(motion.img)`
  object-fit: "contain";
  position: absolute;
  bottom: -135px;
`;

export const DesktopImage = styled(Img)`
  width: 900px;
  bottom: 190px;
`;

export const HardwareImage = styled(Img)`
  width: 1400px;
`;

export const DockImage = styled(Img)`
  width: 840px;
  bottom: 194px;
`;

export const DesktopElement = styled(Img)`
  z-index: 2;
  position: absolute;
`;

export const ControlCenterImage = styled(DesktopElement)`
  width: 200px;
  top: -260px;
  right: -445px;
`;

export const TitleContainer = styled(motion.div)`
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
