import styled, { createGlobalStyle } from 'styled-components';
import raio from "../assets/img/raio.svg"

export default function Logo(){
    return (
        <SCLogo>
            <img src={raio} alt="ThunderZap" />
            <h2>ZapRecall</h2>
        </SCLogo>
    )
}

const SCLogo = styled.div`
    padding-top: 1em; padding-bottom: 0.5em;
    display:flex;
    gap: 1em;
    align-items: center;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    transform: rotate(0.58deg);
    letter-spacing: -0.012em;
`