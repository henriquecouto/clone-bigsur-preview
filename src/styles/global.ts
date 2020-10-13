import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }

  .white {
    color: #fff
  }

  h2 {
    font-size: 64px
  }

  h1 {
    font-size: 188px
  }
`;
