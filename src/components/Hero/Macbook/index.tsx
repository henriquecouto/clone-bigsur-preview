import React, { useRef } from "react";
import Desktop from "./Desktop";
import Dock from "./Dock";
import ControlCenter from "./ControlCenter";
import Title from "./Title";
import Window from "./Window";

import mapsImg from "../../../assets/hero_map.png";
import safariImg from "../../../assets/hero_safari.png";
import bitmapImg from "../../../assets/hero_bitmap.png";

const Macbook: React.FC = () => {
  const desktopRef = useRef(null);

  return (
    <>
      <Desktop refObject={desktopRef}>
        <Dock />
        <div
          style={{
            width: 0,
            height: 0,
            position: "relative",
          }}
        >
          <ControlCenter />
          <Window
            desktopRef={desktopRef}
            image={mapsImg}
            positionX={{ start: -300, finish: 0 }}
            positionY={{ start: -600, finish: 0 }}
            style={{ width: 500, top: -240, left: -440 }}
          />
          <Window
            desktopRef={desktopRef}
            image={safariImg}
            positionX={{ start: 800, finish: 0 }}
            positionY={{ start: 600, finish: 0 }}
            style={{ width: 510, top: -180, left: -260 }}
          />
          <Window
            desktopRef={desktopRef}
            image={bitmapImg}
            positionX={{ start: -300, finish: 0 }}
            positionY={{ start: 600, finish: 0 }}
            style={{ width: 400, top: -60, left: -380 }}
          />
        </div>
      </Desktop>
      <Title />
    </>
  );
};

export default Macbook;
