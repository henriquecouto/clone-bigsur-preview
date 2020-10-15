import React, { useRef } from "react";
import Desktop from "./Desktop";
import Dock from "./Dock";
import ControlCenter from "./ControlCenter";
import Title from "./Title";
import Maps from "./Maps";
import Bitmap from "./Bitmap";
import Safari from "./Safari";

const Macbook: React.FC = () => {
  const desktopRef = useRef();

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
          <Maps desktopRef={desktopRef} />
          <Safari desktopRef={desktopRef} />
          <Bitmap desktopRef={desktopRef} />
        </div>
      </Desktop>
      <Title />
    </>
  );
};

export default Macbook;
