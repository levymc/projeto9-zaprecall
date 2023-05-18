import styled from 'styled-components';
import { useState } from 'react';

export default function BtnFase3(props){

    const infos = [
        {
            frase: "Não lembrei",
        },
        {
            frase: "Quase não lembrei",
        },
        {
            frase: "Zap!",
        },
        
    ]

    return (
        <>
            {infos.map((info, i) => (
                <StyleBtn3
                    key = {i} 
                    id = {i}
                    respostas = {props.respostas}
                    onClick={() => {
                        props.setRespostas(i + 1)
                        console.log(props.respostas)
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