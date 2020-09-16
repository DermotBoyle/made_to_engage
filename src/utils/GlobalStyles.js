import {createGlobalStyle} from 'styled-components';
import Poppins from "./fonts/Poppins-Regular.ttf";
import PoppinsMedium from "./fonts/Poppins-Medium.ttf";
import {normalize} from "polished"


export const GlobalStyle = createGlobalStyle`

${normalize()};

html {
  font-size: 16px;
  box-sizing: border-box;  
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: black;
}

main {
  width: 90%;
  margin: 0 auto;
}


@font-face {
    font-family: 'PoppinsRegular';
    src: url(${Poppins}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }


  @font-face {
    font-family: 'PoppinsMedium;
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
`