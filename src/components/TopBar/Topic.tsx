import React from "react";
import { useAnimation } from "framer-motion";
import { LI, NL, UL } from "./styles";

const topicVariants = {
  opened: {
    height: "auto",
  },
  closed: {
    height: 25,
  },
};

const Topic: React.FC<{
  name: string;
  subtopics?: Array<{ name: string; content: string }>;
  content?: string;
}> = ({ name, subtopics }) => {
  const controlTopic = useAnimation();
  let openTopic = true;

  const handleOpenTopic = () => {
    openTopic = !openTopic;
    controlTopic.start(openTopic ? "opened" : "closed");
  };

  return (
    <LI
      key={name}
      variants={topicVariants}
      animate={controlTopic}
      onClick={handleOpenTopic}
      initial={openTopic ? "opened" : "closed"}
    >
      {name}
      {subtopics && (
        <NL>
          <UL>
            {subtopics.map((subtopic, i) => {
              return (
                <LI key={subtopic.name + i}>
                  {subtopic.name}
                  <p style={{ fontWeight: 500 }}>{subtopic.content}</p>
                </LI>
              );
            })}
          </UL>
        </NL>
      )}
    </LI>
  );
};
export default Topic;
