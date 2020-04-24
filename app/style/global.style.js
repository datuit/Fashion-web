import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:400|Oswald:300&display=swap');

    * {
    box-sizing: border-box;
    }

    html,
    body {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif !important;
    font-size: 12px;
    position: relative;
    }

    ul.none {
    margin: 0;
    padding: 0;
    li {
        display: inline-block;
        list-style: none;
    }
    }

    a,
    a:visited,
    a:link,
    a:hover,
    a:active {
    text-decoration: none;
    color: black;
    }
`;

export default GlobalStyle;