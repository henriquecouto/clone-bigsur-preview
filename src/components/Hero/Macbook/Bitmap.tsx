import React from "react";

import bitmapImg from "../../../assets/hero_bitmap.png";
import Window from "./Window";

type Props = {
  desktopRef: React.MutableRefObject<any>;
};

const Bitmap: React.FC<Props> = ({ desktopRef }) => {
  return (
    <Window
      desktopRef={desktopRef}
      image={bitmapImg}
      positionX={{ start: -300, finish: 0 }}
      positionY={{ start: 600, finish: 0 }}
      style={{ width: 400, top: -60, left: -380 }}
    />
  );
};

export default Bitmap;
