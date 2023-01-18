import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    max-width: 1140px;
    min-width: 720px;
  }
  ul{
   list-style:none;
   }
   h3{
    margin: 0px;
   }
   a{
    text-decoration: none;
    color: #000;
    transition: 0.2s;
    &:hover{
      color: #777;
      text-decoration: underline #777;
    }
   }
`;

export default GlobalStyle;
