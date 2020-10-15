import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.header)`
  position: fixed;
  top: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const Header = styled.h1`
  font-size: 32px;
`;

export const Subheader = styled.div`
  font-size: 86px;
  font-weight: 600;
  line-height: 82px;
`;

export const Body = styled.p`
  font-size: 26px;
  text-align: center;
  max-width: 800px;
  margin: 30px 0;
`;
