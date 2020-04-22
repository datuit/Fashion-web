import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato:400|Oswald:300&display=swap');
  *{
    box-sizing: border-box;
  },
  html,
  body {
    height: 100%;
    width: 100%;
    margin : 0;
    padding : 0;
    font-family: 'Oswald', sans-serif !important;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    font-size : 12px;
  }
`;

export default GlobalStyle;
