import styled from 'styled-components';
import { useState } from 'react';
import incorrectIcon from '../assets/img/incorrectIcon.svg'
import correctIcon from '../assets/img/correctIcon.svg'
import unknowIcon from '../assets/img/unknowIcon.svg'

export default function BtnFase3(props){

    const infos = [
        {
            frase: "Não lembrei",
            dataTest: "no-btn",
            dataTestInicial: "no-icon",
            status: "incorreto",
            icon: incorrectIcon,
        },
        {
            frase: "Quase não lembrei",
            dataTest: "partial-btn",
            dataTestInicial: "partial-icon",
            status: "quase",
            icon: unknowIcon,
        },
        {
            frase: "Zap!",
            dataTest: "zap-btn",
            dataTestInicial: "zap-icon",
            status: "correto",
            icon: correctIcon,
        },
        
    ]

    const alterarFase = (index, novoValor) => {
        props.setFase(prevFase => {
          const novoArray = [...prevFase];
          novoArray[index] = novoValor; 
          console.log(novoArray)
          return novoArray; 
        });
      };
    const alterarStatus = (index, novoValor) => {
        props.setRespostas(prevStatus => {
          const novoArray = [...prevStatus];
          novoArray[index] = novoValor;
        //   console.log(novoArray)
          return novoArray;
        });
      };

    const desabilitaButton = (index, novoValor) => {
        props.setBtnDesabilitado(prevStatus => {
          const novoArray = [...prevStatus]; 
          novoArray[index] = novoValor; 
        //   console.log(novoArray)
          return novoArray; 
        });
      };
    const alteraIcon = (index, novoValor) => {
        props.setIconsStatus(prevStatus => {
          const novoArray = [...prevStatus];
          novoArray[index] = novoValor;
        //   console.log(novoArray)
          return novoArray;
        });
      };
    const alteraIconFooter = (index, novoValor) => {
        props.setIconsStatusFooter(prevStatus => {
          const novoArray = [...prevStatus];
          novoArray[index] = novoValor;
          console.log(novoArray)
          return novoArray;
        });
      };
    const alteraIconInicial = (index, novoValor) => {
        props.setIconInicial(prevStatus => {
          const novoArray = [...prevStatus];
          novoArray[index] = novoValor;
          console.log(novoArray)
          return novoArray;
        });
      };

    return (
        <>
            {infos.map((info, i) => (
                <StyleBtn3
                    key = {i} 
                    id = {i}
                    status = {info.status}
                    data-test = {info.dataTest}
                    onClick={() => {
                        alterarStatus(props.cardIndex, info.status)
                        alterarFase(props.cardIndex, 1)
                        desabilitaButton(props.cardIndex, true)
                        alteraIcon(props.cardIndex, info.icon)
                        alteraIconFooter(props.resolvidos, info.icon)
                        alteraIconInicial(props.cardIndex, info.dataTestInicial)
                        props.setResolvidos(props.resolvidos+1)
                        console.log(info.dataTest)
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