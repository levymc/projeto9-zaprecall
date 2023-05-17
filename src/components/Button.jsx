import styled from 'styled-components';
import play from '../assets/img/play.svg'

export default function Button(props) {

    let funcBtn1 = () => {
        console.log(props.cards)
        alert("Oi")
    }

    return (
        props.cards.map((card, i) => (
        <SCButton key={i} onClick={funcBtn1}>
            <div>Pergunta {i+1}</div>
            <SCCanto><img src={play} alt="" /></SCCanto>
        </SCButton>
        
        ))
    );
}

const SCButton = styled.div`
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
`;

const SCCanto = styled.section`
    position: absolute;
    bottom: middle;
    right: 1em;
`
