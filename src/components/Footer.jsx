import styled, { createGlobalStyle } from 'styled-components';

export default function Footer(props){
    return (
        <SCFooter data-test="footer">
            <h2>{props.resolvidos}/{props.cards.length} Concluídos</h2>

            <SCImgs>
                {props.iconsStatusFooter.map((icon, i) => {
                    if(icon != "/src/assets/img/play.svg" && icon != "/assets/play-2b24aa69.svg"){
                        return <img key={i} src={icon} alt="" />
                    }
                })}
            </SCImgs>
            
        </SCFooter>
    )
}

const SCImgs = styled.div`
    display: flex;
    gap: 0.25em;
`

const SCFooter = styled.div`
    margin-top: 2em;
    display: flex;
    gap: 0.5em;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
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