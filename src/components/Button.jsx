import styled from 'styled-components';
import cards from './cards'

export default function Button() {
    let funcBtn1 = () => {
        console.log(cards)
        alert("Oi")
    }

    return (
        <SCButton onClick={funcBtn1}>Teste</SCButton>
    );
}

const SCButton = styled.button`
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
`;
