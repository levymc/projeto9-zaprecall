import styled from 'styled-components';
import play from '../assets/img/play.svg'
import virar from '../assets/img/returnIcon.svg'
import BtnFase3 from './BtnFase3';
import { useState } from 'react';

export default function Button(props) {

    const [fase, setFase] = useState(props.cards.map(() => 1))

    let funcBtn1 = (card, i) => {
        console.log(card)
        const updatedFases = [...fase];
        updatedFases[i] = 2;
        setFase(updatedFases);
    }

    let funcVirar = (card, i) => {
        console.log(props.respostas[i])
        const updatedFases = [...fase];
        updatedFases[i] = 3;
        setFase(updatedFases);
    }

    return (
        props.cards.map((card, i) => (
            fase[i] == 1 ?
                <SCButton1
                    data-test="flashcard" 
                    key={i} 
                    resposta={props.resposta}
                    >
                    <h2  data-test="flashcard-text" >Pergunta {i+1}</h2>
                    <SCCanto><img onClick={() => {funcBtn1(card, i)}} data-test="play-btn" src={play} alt="btnFase1" /></SCCanto>
                </SCButton1>
            : fase[i] == 2 ?
                <SCButton2 key={i}>
                    <h2 data-test="flashcard-text" >{card.question}</h2>
                    <img data-test="turn-btn" onClick={() => {funcVirar(card, i)}} src={virar} alt="TurnBtn" />
                </SCButton2>

            : fase[i] == 3 ?
                <SCButton3 key={i}>
                    <h2 data-test="flashcard-text" >{card.answer}</h2>
                    <SCFlex>
                        <BtnFase3 
                            setRespostas = {props.setRespostas}
                            resposta = {props.respostas[i]}
                        />
                    </SCFlex>
                </SCButton3>
            : null
        
        ))
    );
}

const SCButton1 = styled.div`
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 3px;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    width: 18.75em;
    height: 4.0625em;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:flex;
    align-items: center;
    position: relative;
    
    img{
        cursor: pointer;
    }
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        ${(props) => props.resposta === 4 && `
            color: red;
            font-style: normal;
        `}
    }
`;

const SCButton2 = styled.div`
    height: 8.1875em;
    width: 18.75em;
    background-color: #FFFFD5;
    border-radius: 3px;
    color: #000000;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:flex;
    position: relative;
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    img{
        cursor: pointer;
        position: absolute;
        right: 1em;
        bottom: 1em;
    }
`

const SCButton3 = styled.div`
    height: 8.1875em;
    width: 18.75em;
    background-color: #FFFFD5;
    border-radius: 3px;
    color: #000000;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
    BtnFase3{
        display: flex;
        flex-direction: row;
    }
`

const SCFlex = styled.div`
    display: flex;
    gap: 0.5em;
`

const SCCanto = styled.section`
    position: absolute;
    bottom: middle;
    right: 1em;
`
