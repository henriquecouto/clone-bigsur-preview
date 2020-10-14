import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 275vh;
  min-height: 3464px;
  background-color: #0066cc;
  overflow: hidden;
`;

export const Desktop = styled(motion.img)`
  z-index: 1;
  width: 100vw;
  object-fit: contain;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const Title = styled(motion.div)`
  z-index: 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
