import styled, { createGlobalStyle } from 'styled-components';

export default function Footer(props){
    return (
        <SCFooter>
            <h2>{props.resolvidos}/{props.cards.length} Concluídos</h2>
        </SCFooter>
    )
}

const SCFooter = styled.div`
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    width: 100vw;
    height: 4.37500em;
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`