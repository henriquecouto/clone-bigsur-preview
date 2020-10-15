import React from "react";
import Desktop from "./Desktop";
import Dock from "./Dock";
import ControlCenter from "./ControlCenter";
import Title from "./Title";
import Maps from "./Maps";
import Bitmap from "./Bitmap";
import Safari from "./Safari";

const Macbook: React.FC = () => {
  return (
    <>
      <Desktop>
        <Dock />
        <div
          style={{
            width: 0,
            height: 0,
            position: "relative",
          }}
        >
          <ControlCenter />
          <Maps />
          <Safari />
          <Bitmap />
        </div>
      </Desktop>
      <Title />
    </>
  );
};

export default Macbook;
