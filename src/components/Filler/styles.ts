import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  justify-content: center;
  padding: 100px 10px;
  position: relative;
  height: 740px;
`;

type ImageProps = {
  imageUrl: string;
};

export const Image = styled.div<ImageProps>`
  position: absolute;
  margin: auto;
  width: 1200px;
  height: 700px;
  background: url(${(props) => props.imageUrl}) center;
  background-size: contain;
  display: flex;
  justify-content: center;
  padding-top: 2%;
`;

export const Content = styled(motion.div)`
  z-index: 1;
  width: 100%;
  height: 380px;
  position: absolute;
  border-radius: 5px;
  cursor: pointer;
`;
