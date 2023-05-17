// Importando o React e o styled-component Container
import React from 'react';
import styled from 'styled-components';

// Definindo o componente Estilo
export function Estilo() {
  return (
    <Container>
        OOOOO
        <MeuBotao id="btn1">Botao</MeuBotao>
    </Container>
    
  )
}

// Configurando o styled-component Container
const Container = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;

  #btn1{
    background-color: yellow;
  }
`;

const MeuBotao = styled.button`
    background: #0099FF;
    border: 2px solid #0099FF;
    border-radius: 3px;
    color: #FDFDFD;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
`;
