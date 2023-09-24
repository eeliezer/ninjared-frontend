import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  :root {
    --button-bg-white: #ffffff;
    --button-bg-red: #ED1703;
    --gray-bg-disabled: #212121;
    --background-card-white: #ffffff;
    --bg-blue: #252850;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
  margin: 0;
  padding: 0;
  background: var(--button-bg-red);
  font-family: 'Quantico', sans-serif;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  }
  
  a {
  text-decoration: none;
  color: #000000;
  }
  
  a:visited {
  color: #000000;
  }
  
  li {
  list-style: none;
  }
`;
