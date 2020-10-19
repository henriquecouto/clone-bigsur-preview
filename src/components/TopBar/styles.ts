import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 20;
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background-color: #212121aa;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(8px);
  --webkit-backdrop-filter: blur(8px);
  border-bottom: solid #e9e9ec88 1px;
`;

export const Content = styled.div`
  padding: 0 10px;
  max-width: 960px;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.p`
  font-size: 14px;
  color: #cecece;
`;

export const Title = styled.p`
  font-size: 22px;
  color: #e9e9ec;
  font-weight: 600;
`;

export const Button = styled(Menu)`
  cursor: pointer;
  user-select: none;
`;
