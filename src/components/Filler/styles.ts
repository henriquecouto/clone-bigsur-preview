import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  justify-content: center;
  padding: 100px 10px;
  position: relative;
`;

type ImageProps = {
  imageUrl: string;
};

export const Image = styled.div<ImageProps>`
  position: absolute;
  margin: auto;
  width: 90vw;
  height: calc(90vw - 90vw * 0.4);
  background: url(${(props) => props.imageUrl}) center;
  background-size: contain;
  display: flex;
  justify-content: center;
  padding-top: 2%;
`;

export const Content = styled(motion.div)`
  z-index: 1;
  width: 58%;
  height: 57%;
  background: #0066aa;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
`;
