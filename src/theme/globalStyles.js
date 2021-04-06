import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
  }

  * {
    font-family: 'Sora', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  div .modal-root{
    top: 0;
    position: fixed;
  }

`;

export default GlobalStyle

// body {
//   background-image: url(${CityPhoto});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }