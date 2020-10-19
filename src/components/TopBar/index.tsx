import { useAnimation } from "framer-motion";
import React from "react";
import {
  Wrapper,
  Content,
  Menu,
  Title,
  Button,
  FeaturesContainer,
} from "./styles";

let openFeatures = false;

const featuresVariants = {
  opened: {
    scale: 1,
    translateY: 0,
    translateX: 0,
    borderRadius: "10px",
    height: "70vh",
  },
  closed: {
    scale: 0,
    translateY: -100,
    translateX: 200,
    borderRadius: "5000px",
    height: 0,
  },
};

const Features: React.FC = () => {
  const control = useAnimation();

  const handleOpenFeatures = () => {
    openFeatures = !openFeatures;
    control.start(openFeatures ? "opened" : "closed");
  };
  return (
    <>
      <FeaturesContainer
        animate={control}
        transition={{ ease: "backInOut", duration: 1 }}
        variants={featuresVariants}
        initial="closed"
      ></FeaturesContainer>
      <Button onClick={handleOpenFeatures}>All New Features</Button>
    </>
  );
};

const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Menu>Preview</Menu>
          <Title>macOS Big Sur</Title>
        </div>
        <Features />
      </Content>
    </Wrapper>
  );
};

export default TopBar;
