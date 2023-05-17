import styled from 'styled-components';
import play from '../assets/img/play.svg'
import virar from '../assets/img/returnIcon.svg'
import { useState } from 'react';

export default function Button(props) {

    const [fase, setFase] = useState(props.cards.map(() => 1))

    let funcBtn1 = (card, i) => {
        console.log(card)
        const updatedFases = [...fase];
        updatedFases[i] = 2;
        setFase(updatedFases);
    }

    return (
        props.cards.map((card, i) => (
            fase[i] == 1 ?
                <SCButton1 key={i} onClick={() => {funcBtn1(card, i)}}>
                    <h2>Pergunta {i+1}</h2>
                    <SCCanto><img src={play} alt="" /></SCCanto>
                </SCButton1>
            : fase[i] == 2 ?
                <SCButton2>
                    <h2>{card.question}</h2>
                    <img src={virar} alt="" />
                </SCButton2>
            : null
        
        ))
    );
}

const SCButton1 = styled.div`
    background: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 3px;
    color: #000000;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    width: 18.75em;
    height: 4.0625em;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:flex;
    align-items: center;
    position: relative;
    
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
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

const SCCanto = styled.section`
    position: absolute;
    bottom: middle;
    right: 1em;
`
