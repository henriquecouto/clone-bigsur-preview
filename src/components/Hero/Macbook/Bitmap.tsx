import React from "react";

import bitmapImg from "../../../assets/hero_bitmap.png";
import Window from "./Window";

const Bitmap: React.FC = () => {
  return (
    <Window
      image={bitmapImg}
      positionX={{ start: -300, finish: 0 }}
      positionY={{ start: 600, finish: 0 }}
      style={{ width: 400, top: -60, left: -380 }}
      whileHover={{ scale: 1.1, rotateX: 5, rotateY: 15, zIndex: 10 }}
    />
  );
};

export default Bitmap;
