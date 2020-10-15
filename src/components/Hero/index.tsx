import React from "react";

import { Container } from "./styles";
import Macbook from "./Macbook";
import Description from "./Description";

const Hero: React.FC = () => {
  return (
    <Container>
      <Macbook />
      <Description />
    </Container>
  );
};

export default Hero;
