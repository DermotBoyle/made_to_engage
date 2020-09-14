import React from 'react';
import {ThemeProvider} from "styled-components"
import Login from './Pages/Login';
import {primaryTheme} from "./utils"
import { GlobalStyle } from "./utils";




function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
    <Login />
    <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
