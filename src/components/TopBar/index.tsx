import React from "react";
import { Wrapper, Content, Menu, Title, Button } from "./styles";

const TopBar: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Menu>Preview</Menu>
          <Title>macOS Big Sur</Title>
        </div>
        <Button onClick={() => console.log("open menu")}>
          All New Features
        </Button>
      </Content>
    </Wrapper>
  );
};

export default TopBar;
