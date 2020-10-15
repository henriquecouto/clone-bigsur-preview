import React from "react";

import safariImg from "../../../assets/hero_safari.png";
import Window from "./Window";

type Props = {
  desktopRef: React.MutableRefObject<any>;
};

const Safari: React.FC<Props> = ({ desktopRef }) => {
  return (
    <Window
      desktopRef={desktopRef}
      image={safariImg}
      positionX={{ start: 800, finish: 0 }}
      positionY={{ start: 600, finish: 0 }}
      style={{ width: 510, top: -180, left: -260 }}
    />
  );
};

export default Safari;
