import React from "react";

import mapsImg from "../../../assets/hero_map.png";
import Window from "./Window";

const Maps: React.FC = () => {
  return (
    <Window
      image={mapsImg}
      positionX={{ start: -300, finish: 0 }}
      positionY={{ start: -600, finish: 0 }}
      style={{ width: 500, top: -240, left: -440 }}
      whileHover={{ scale: 1.1, rotateX: 5, rotateY: 15, zIndex: 10 }}
    />
  );
};

export default Maps;
