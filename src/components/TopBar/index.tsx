import { useAnimation } from "framer-motion";
import React from "react";
import {
  Wrapper,
  Content,
  Menu,
  Title,
  Button,
  FeaturesContainer,
  UL,
} from "./styles";

import featuresList from "./features.json";
import Topic from "./Topic";

const featuresVariants = {
  opened: {
    scale: 1,
    translateY: 0,
    translateX: 0,
  },
  closed: {
    scale: 0,
    translateY: -400,
    translateX: 240,
  },
};

const Features: React.FC = () => {
  let openFeatures = false;
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
        initial={openFeatures ? "opened" : "closed"}
      >
        <UL>
          {featuresList.topics.map((feature, i) => (
            <Topic
              name={feature.name}
              subtopics={feature.subtopics}
              key={feature.name + i}
            />
          ))}
        </UL>
      </FeaturesContainer>
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
