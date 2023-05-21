import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Button from "./components/Button";
import Topo from './components/Topo';
import Footer from './components/Footer';
import cards from './components/cards'
import play from './assets/img/play.svg'


function App() {

  let [resolvidos, setResolvidos] = useState(0)

  let [status, setRespostas] = useState(cards.map(() => 'jogo'))

  let [btnDesabilitado, setBtnDesabilitado] = useState(cards.map(() => false))

  let [iconsStatus, setIconsStatus] = useState(cards.map(() => play))

  return (
    <>
      <GlobalStyle />
      <Container>

        <Topo />

        <Button 
          btnDesabilitado = {btnDesabilitado}
          setBtnDesabilitado = {setBtnDesabilitado}
          cards = {cards}
          setRespostas = {setRespostas}
          status = {status}
          data-test = "flashcard"
          resolvidos = {resolvidos}
          setResolvidos = {setResolvidos}
          iconsStatus = {iconsStatus}
          setIconsStatus = {setIconsStatus}
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
  padding-bottom:8em;
  align-items: center;
  justify-content: center;
  overflow-y: auto; overflow-x: hidden;

`;
