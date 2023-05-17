import styled from 'styled-components';
import { useState } from 'react';

export default function BtnFase3(){

    const infos = [
        {
            frase: "Não lembrei",
            cor: "#FF3030"
        },
        {
            frase: "Quase não lembrei",
            cor: "#FF922E"
        },
        {
            frase: "Zap!",
            cor: "#2FBE34"
        },
        
    ]

    return (
        <>
            {infos.map((info, i) => (
                <StyleBtn3 key={i} id={i}>{info.frase}</StyleBtn3>
            ))}
        </>
    )
}

const StyleBtn3 = styled.button`
    ${(props) => props.id === 1 && `
    background-color: red;
  `}

    ${(props) => props.id === 2 && `
        background-color: blue;
    `}
    `