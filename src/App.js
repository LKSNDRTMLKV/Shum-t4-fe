import React from "react";

import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./Consts/GlobalStyle";

//consts imports
import theme from './Consts/Theme';
import {Text_main, Card_heading, Text24} from "../src/Consts/Text"
import News from './Components/News/News';

import "./App.css";
import Footer from './Components/Footer/Footer';

// import { API } from './Consts/Api';

//component imports
import Navbar from "../src/Components/Navbar/Navbar";
import Player from "../src/Components/Player/Player";
import GlobalContextProvider from "./Context/GlobalContext";

const AppWrapper = styled.div`
  padding: 50px 80px 0 80px;
  background-color: ${(props) => props.theme.black};
`;

function App() {
  return (
    <GlobalContextProvider>
    
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Player />
        <News />
        <Footer />
      </ThemeProvider>
    
    </GlobalContextProvider>
  );
}

export default App;
