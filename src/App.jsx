import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Button from "./components/Button";

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        OOOOO
        <Button />
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
`;
