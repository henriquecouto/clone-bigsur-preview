import React from "react";

import mapsImg from "../../../assets/hero_map.png";
import Window from "./Window";

type Props = {
  desktopRef: React.MutableRefObject<any>;
};

const Maps: React.FC<Props> = ({ desktopRef }) => {
  return (
    <Window
      desktopRef={desktopRef}
      image={mapsImg}
      positionX={{ start: -300, finish: 0 }}
      positionY={{ start: -600, finish: 0 }}
      style={{ width: 500, top: -240, left: -440 }}
    />
  );
};

export default Maps;
