import { useState } from 'react'
import { Estilo } from './Container'  
import styled, { createGlobalStyle } from 'styled-components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
      <Estilo>

      </Estilo>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Righteous';
    src: url('./assets/fonts/Righteous-Regular.ttf');
  }

  body {
    font-family: 'Righteous', sans-serif;
  }
`;