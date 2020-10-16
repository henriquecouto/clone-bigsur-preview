import { motion } from "framer-motion";
import styled from "styled-components";
import clock from "../../assets/clock.svg";

export const Container = styled.div`
  display: flex;
  background-color: #0066cc;
  overflow: hidden;
  padding: 50px;
  justify-content: center;
`;

export const Body = styled.div`
  background: url(${clock});
  background-size: contain;
  width: 300px;
  height: 300px;
  margin: 0 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #0066cc;
  box-shadow: 0 -15px 15px #fff2, inset 0 -15px 15px #fff2, 0 15px 15px #0002,
    inset 0 15px 15px #0002;

  ::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: #212121;
    border-radius: 50%;
    z-index: 10000;
  }
`;

export const Pointer = styled.div`
  position: absolute;
`;

const PointerBase = styled(motion.div)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  border-radius: 50%;
`;

export const Hour = styled(PointerBase)`
  width: 160px;
  height: 160px;

  ::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 80px;
    background: #ff105e;
    z-index: 10;
    border-radius: 6px 6px 0 0;
  }
`;

export const Min = styled(PointerBase)`
  width: 190px;
  height: 190px;

  ::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 90px;
    background: #fff;
    z-index: 11;
    border-radius: 6px 6px 0 0;
  }
`;

export const Sec = styled(PointerBase)`
  width: 230px;
  height: 230px;

  ::before {
    content: "🔼";
    font-size: 10px;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 2px;
    height: 150px;
    background: #9191ff;
    z-index: 12;
    border-radius: 6px 6px 0 0;
  }
`;
