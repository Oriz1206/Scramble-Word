import styled, { keyframes } from "styled-components";

export const WarpRule = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin: 0;

    overflow: hidden auto;
`

export const ArticleWrap = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

`;

export const TitleText = styled.div`
    height: fit-content;
    width: fit-content;
    position: relative;
    z-index: 0;

    &:before {
        position: absolute;
        content: '';
        height: 300px;
        width: 300px;
        background: var(--Primary_Yellow);
        border-radius: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        z-index: -1;
    }
    &> h1 {
        color: var(--Primary_White);
        text-transform: uppercase;
        font-size: 13vh;
        font-weight: bold;
        letter-spacing: 10px;
    }

`;

export const ButtonEntry = styled.div`
    margin-top: 40px;   
    height: fit-content;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;

    &>a{
        text-decoration: none;
        text-transform: capitalize;
        color: var(--Primary_White);
        font-size: 2.2vh;
        padding: 40px;
        background-color: var(--Secondary_Dark);
        border-radius: 30px;
        font-weight: 500;
        letter-spacing: 2px;
        transition-duration: 0.2s;

        &:hover {
            box-shadow: 0 0 50px var(--Primary_Yellow);
        }
    }

`

export const TitlePart = styled.div`
    
    width: 80%;
    margin: 0 auto;
    height: fit-content;
    max-height: 40%;
    position: relative;
    z-index: 0;

    &:before {
        position: absolute;
        content: '';
        height: 90px;
        width: 600px;
        background: var(--Primary_Yellow);
        border-radius: 20px;
        left: 0%;
        top: 50%;
        transform: translate(-10%, -50%);
        z-index: -1;

    }
    &>h1 {
        font-size: 8.5vh;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: 2px;
    }

`;

export const RulePart = styled.div`
    height: fit-content;
    margin-top: 5%;
    max-height: 50%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    z-index: 0;
    &:before {
        position: absolute;
        content: '';
        height: 700px;
        width: 700px;
        background: var(--Secondary_Dark);
        border-radius: 100%;
        left: 50%;
        top: 10%;
        transform: translate(-50%, 0%);

        z-index: -1;
    }
    
`;

const LeftToRight = keyframes`
    0%{
        left: 46%;
    }
    50%{
        left: 54%;
    }
    100%{
        left: 46%;
    }
`;
const RightToLeft = keyframes`
    0%{
        left: 54%;
    }
    50%{
        left: 46%;
    }
    100%{
        left: 54%;
    }
`;

export const EachRule = styled.div`
    height: 600px;
    overflow: hidden;
    width: 28%;
    border: 3px solid var(--Primary_Dark);
    border-radius: 30px; 
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px;
    background: var(--Primary_White);
    &> div {
        width: 100%;
        &:first-child {
            height: 30%;
            display: flex;
            align-items: center;
            &>p{
                font-size: 6vh;
                font-weight: bold;
                letter-spacing: 3px;
            }
        }
        &:nth-child(2){
            height: 60%;
            overflow: hidden;
            &>p{
                word-break: normal;
                font-size: 2.5vh;
            }
        }
        &:nth-child(3){
            height: 10%;
            position: relative;
            &> div{
                    position: absolute;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    height: 40px;
                    width: 40px;
                    border-radius: 100%;
                    box-sizing: border-box;
                &:first-child{
                    background-color: var(--Primary_Yellow);
                    left: 46%;
                    animation: ${LeftToRight} 4s ease infinite;
                }
                &:last-child{
                    background-color: transparent;
                    border: 3px solid var(--Primary_Dark);
                    left: 54%;
                    animation: ${RightToLeft} 4s ease infinite;
                }
            }
        }
    }
`;
