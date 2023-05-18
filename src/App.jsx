import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Button from "./components/Button";
import Topo from './components/Topo';
import Footer from './components/Footer';
import cards from './components/cards'

function App() {

  let [resolvidos, setResolvidos] = useState(0)

  let [respostas, setRespostas] = useState(cards.map(() => 4))

  return (
    <>
      <GlobalStyle />
      <Container>

        <Topo />

        <Button 
          cards = {cards}
          setRespostas = {setRespostas}
          respostas = {respostas}
        />
        
        <Footer 
          resolvidos = {resolvidos}
          cards = {cards}
        />

      </Container>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Righteous';
    src: './assets/fonts/Righteous-Regular.ttf';
  }

  * {
    font-family: 'Righteous', sans-serif;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto; overflow-x: hidden;

`;
