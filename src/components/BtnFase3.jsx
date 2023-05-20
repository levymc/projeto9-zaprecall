import styled from 'styled-components';
import { useState } from 'react';

export default function BtnFase3(props){

    const infos = [
        {
            frase: "Não lembrei",
            dataTest: "no-btn",
            status: "incorreto",
        },
        {
            frase: "Quase não lembrei",
            dataTest: "partial-btn",
            status: "quase",
        },
        {
            frase: "Zap!",
            dataTest: "zap-btn",
            status: "correto",
        },
        
    ]

    const alterarFase = (index, novoValor) => {
        props.setFase(prevFase => {
          const novoArray = [...prevFase]; // Cria uma cópia do array de estado atual
          novoArray[index] = novoValor; // Atualiza o elemento desejado no novo array
          console.log(novoArray)
          return novoArray; // Retorna o novo array como o novo estado
        });
      };
    const alterarStatus = (index, novoValor) => {
        props.setRespostas(prevStatus => {
          const novoArray = [...prevStatus]; // Cria uma cópia do array de estado atual
          novoArray[index] = novoValor; // Atualiza o elemento desejado no novo array
          console.log(novoArray)
          return novoArray; // Retorna o novo array como o novo estado
        });
      };

    return (
        <>
            {infos.map((info, i) => (
                <StyleBtn3
                    key = {i} 
                    id = {i}
                    status = {info.status}
                    data-test = {props.dataTest}
                    onClick={() => {
                        alterarStatus(props.cardIndex,info.status)
                        alterarFase(props.cardIndex, 1)
                        console.log(info.status)
                    }}
                    >
                    {info.frase}
                </StyleBtn3>
            ))}
        </>
    )
}

const StyleBtn3 = styled.button`
    padding: 0.75em 1.5em;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    border-radius: 5px;
    cursor: pointer;
    color: white;   

    ${(props) => props.id === 0 && `
        background-color: #FF3030;
        border: 1px solid #FF3030;
    `}

    ${(props) => props.id === 1 && `
        background-color: #FF922E;
        border: 1px solid #FF922E;
    `}
    
    ${(props) => props.id === 2 && `
        background-color: #2FBE34;
        border: 1px solid #2FBE34;
    `}
    `