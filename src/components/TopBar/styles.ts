import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 20;
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #212121aa;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(8px);
  --webkit-backdrop-filter: blur(8px);
  border-bottom: solid #e9e9ec88 1px;
`;

export const Content = styled.div`
  position: relative;
  padding: 0 10px;
  max-width: 960px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.p`
  font-size: 14px;
  color: #cecece;
`;

export const Title = styled.p`
  font-size: 22px;
  color: #e9e9ec;
  font-weight: 600;
`;

export const Button = styled(Menu)`
  cursor: pointer;
  user-select: none;
`;

export const FeaturesContainer = styled(motion.div)`
  width: 500px;
  position: absolute;
  top: 75px;
  right: 0;
  background-color: #efefefee;
  border-radius: 10px;
  box-shadow: #21212166 1px 1px 15px 0;
  padding: 13px 20px;
  display: flex;
  flex-direction: column;
`;

export const UL = styled(motion.ul)`
  list-style-type: none;
`;

export const LI = styled(motion.li)`
  position: relative;
  cursor: pointer;
  margin: 7px 0;
  user-select: none;
  font-weight: 600;
  overflow: hidden;
`;

export const NL = styled.div`
  margin-left: 15px;
`;
