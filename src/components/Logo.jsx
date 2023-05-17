import styled, { createGlobalStyle } from 'styled-components';

export default function Logo(){
    return (
        <SCLogo>ZapRecall</SCLogo>
    )
}

const SCLogo = styled.div`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    transform: rotate(0.58deg);
    letter-spacing: -0.012em;
`