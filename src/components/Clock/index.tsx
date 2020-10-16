import { useAnimation, useViewportScroll } from "framer-motion";
import React from "react";
import { Body, Container, Pointer, Hour, Min, Sec } from "./styles";

const deg = 6;

const Clock: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();

  console.log({ scrollYProgress });

  const hourControl = useAnimation();
  const minuteControl = useAnimation();
  const secondControl = useAnimation();

  const getTime = () => {
    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * deg;
    const ss = (date.getSeconds() + 1) * deg;

    return { hh, mm, ss };
  };

  const updateTime = () => {
    const { hh, mm, ss } = getTime();

    hourControl.start({ rotateZ: hh + mm / 12 });
    minuteControl.start({ rotateZ: mm });
    secondControl.start({ rotateZ: ss });
  };

  setTimeout(() => {
    setInterval(updateTime, 1000);
  }, 1000);

  return (
    <Container>
      <Body
        animate={{ scale: 2 }}
        initial={{ scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "backInOut",
        }}
      >
        <Pointer>
          <Hour animate={hourControl} transition={{ ease: "linear" }} />
        </Pointer>
        <Pointer>
          <Min animate={minuteControl} transition={{ ease: "linear" }} />
        </Pointer>
        <Pointer>
          <Sec animate={secondControl} transition={{ ease: "linear" }} />
        </Pointer>
      </Body>
    </Container>
  );
};

export default Clock;
