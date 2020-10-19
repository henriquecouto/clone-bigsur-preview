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
}> = ({ name, subtopics, content }) => {
  const controlTopic = useAnimation();
  let openTopic = true;

  const handleOpenTopic = () => {
    openTopic = !openTopic;
    controlTopic.start(openTopic ? "opened" : "closed");
  };

  return (
    <>
      <LI
        key={name}
        variants={topicVariants}
        animate={controlTopic}
        initial={openTopic ? "opened" : "closed"}
      >
        <div onClick={handleOpenTopic}>{name}</div>
        {subtopics && (
          <NL>
            <UL>
              {subtopics.map((subtopic, i) => (
                <Topic
                  key={subtopic.name + i}
                  name={subtopic.name}
                  content={subtopic.content}
                />
              ))}
            </UL>
          </NL>
        )}
        {!!content && <p style={{ fontWeight: 500 }}>{content}</p>}
      </LI>
    </>
  );
};
export default Topic;
