import React from "react";

import safariImg from "../../../assets/hero_safari.png";
import Window from "../Window";

const Safari: React.FC = () => {
  return (
    <Window
      image={safariImg}
      positionX={{ start: 800, finish: 0 }}
      positionY={{ start: 600, finish: 0 }}
      style={{ width: 510, top: -180, left: -260 }}
      whileHover={{ scale: 1.1, rotateX: 5, rotateY: 15, zIndex: 10 }}
    />
  );
};

export default Safari;
