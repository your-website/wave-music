import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }

  body {
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
  }
`;

const H1 = styled.h1`
  color: rgb(54, 54, 54);
`;

const H2 = styled.h2`
  color: rgb(54, 54, 54);
`;

const H3 = styled.h3`
  font-weight: 400;
  color: rgb(100, 100, 100);
`;

const H4 = styled.h4`
  font-weight: 400;
  color: rgb(100, 100, 100);
`;

const AppContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  transition: all 0.5s ease;

  &.library-active {
    margin-left: 30%;
  }
`;

export { H1, H2, H3, H4, GlobalStyle, AppContainer };
