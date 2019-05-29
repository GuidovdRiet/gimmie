import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  * {
    font-family: ${({ theme }) => theme.primaryFont}, sans-serif;     
  }
  body {
    font-size: 1.6rem;
    line-height: 2;
    min-height: 500px;
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
    max-width: 100%;
    background-color: ${({ theme }) => theme.purple};
    &.area-svg {
      background-image: url(${({ theme }) => theme.pageBackgrounds.area});
      background-repeat: no-repeat;
    }
  }
  a, button {
    text-decoration: none;
  }
  h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }
  h3 {  
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
  h4 {
    font-weight: 300;
    margin: 5px 0;
  }
  p, a {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 25px;
  }

  /* Page transition states */
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

export default GlobalStyle;
