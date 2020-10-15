import { useTransform, useViewportScroll } from "framer-motion";
import React from "react";
import { Body, Container, Header, Subheader } from "./styles";

const Description: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  const desktopTranslateY = useTransform(
    scrollYProgress,
    [0.05, 0.07, 0.12, 0.13],
    [0, 0, -1000, -1200]
  );

  return (
    <Container style={{ translateY: desktopTranslateY }}>
      <Header>macOS Big Sur</Header>
      <Subheader>Doing it all,</Subheader>
      <Subheader>in all new ways.</Subheader>
      <Body>
        macOS Big Sur elevates the most advanced desktop operating system in the
        world to a new level of power and beauty. Experience Mac to the fullest
        with a refined new design. Enjoy the biggest Safari update ever.
        Discover new features for Maps and Messages. And get even more
        transparency around your privacy.
      </Body>
    </Container>
  );
};

export default Description;
