import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Button from "./components/Button";
import cards from './components/cards'

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Button cards={cards}/>
      </Container>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Righteous';
    src: url('./assets/fonts/Righteous-Regular.ttf');
  }

  body {
    font-family: 'Righteous', sans-serif;
  }
`;

const Container = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;
