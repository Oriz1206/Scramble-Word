import styled from "styled-components";

export const GameWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    
`;

export const QuestionWrap = styled.div`
    display: flex;
    align-items: center;
    width: 55%;
    margin: 0 auto;
    height: 50%;
    background-color: var(--Primary_White);
    border-radius: 30px;
    box-sizing: border-box;
    padding: 40px;
`;

export const QuestionImage = styled.div`
    width: 65%;     
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 3px solid var(--Primary_Yellow);
    overflow: hidden;

    & > img {
        height: 100%;
        border-radius: 10px;
    }
`;

export const QuestionBtns = styled.div`
    width: 35%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;

    & > button {
        height: 60px;
        width: 60px;
        border-radius: 15px;
        border: none;
        background-color: var(--Primary_Dark);
        color: var(--Primary_White);
        font-size: 2.2vh;
        font-weight: bold;
        transition-duration: .2s;
        cursor: pointer;
        margin: 5px;

        &:disabled{
            background-color: var(--Secondary_White);
            cursor: default;
        }

        &:not(:disabled):hover{
            background-color: var(--Primary_Yellow);
        }
    }
`;

export const AnswereBtns = styled.div`
    height: fit-content;
    width: fit-content;
    max-width: 55%;
    margin-top: 30px;
    display: flex;
    align-items: center;

    & > button {
        height: 60px;
        width: 60px;
        border-radius: 15px;
        border: none;
        background-color: var(--Primary_Yellow);
        color: var(--Primary_Dark);
        font-size: 2.2vh;
        font-weight: bold;
        transition-duration: .2s;
        cursor: pointer;
        margin: 5px;

        &:disabled{
            background-color: var(--Secondary_White);
            cursor: default;
        }
        &:not(:disabled):hover {
            background-color: var(--Secondary_Dark);
            box-shadow: 0 0 50px var(--Primary_Yellow);
        }        
    }

`

export const GiveUpWrap = styled.div`
    margin-top: 30px;
    height: fit-content;
    width: 55%;
    display: flex;
    justify-content: center;
    &> div {
        height: fit-content;
        & > button {
            border: none;
            height: 60px;
            width: fit-content;
            padding: 0 50px;
            border-radius: 20px;
            background-color: var(--Secondary_Dark);
            color: var(--Primary_White);
            font-size: 1.7vh;
            font-weight: bold;
            cursor: pointer;
            transition-duration: .2s;
            &:hover {
                background-color: var(--Primary_Yellow);
                box-shadow: 0 0 50px var(--Primary_Yellow);
            }
        }
    }
`;

export const PopupWrap = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgb(0,0,0, 0.5);
    z-index: 2;
`;

export const PopupWrapMain = styled.div`
    height: 350px;
    width: 550px;
    display: flex;
    flex-direction: column;
    background-color: var(--Primary_White);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    box-shadow: 0 0 50px rgb(0,0,0, 0.3);
    box-sizing: border-box;
    padding: 30px;
    &>div{
        width: 100%;

    }
`

export const PopupInfo = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>div{
        width: 100%;
        &:first-child {
            height:60%;
            display: grid;
            place-items: center;
            border-bottom: 2px solid var(--Primary_Yellow);
            &>p{
                font-size: 4vh;
                text-transform: uppercase;
                font-weight: bold;
                letter-spacing: 3px;
                &.Wrong{
                    color: var(--Primary_Red);
                }
                &.Correct{
                    color: var(--Primary_Green);
                }
            }
        }
        &:last-child{
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            &>p{
                width: fit-content;
                font-size: 1.8vh;
                margin: 0;
                letter-spacing: 1px;
                &:last-child{
                    background-color: var(--Primary_Yellow);
                }
            }
        }
    }
`;
export const PopupBtn =styled.div`
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    &>button {
        border: none;
            height: 60px;
            width: fit-content;
            padding: 0 50px;
            border-radius: 20px;
            background-color: var(--Secondary_Dark);
            color: var(--Primary_White);
            font-size: 1.7vh;
            font-weight: bold;
            cursor: pointer;
            transition-duration: .2s;
            &:hover {
                background-color: var(--Primary_Yellow);
                color: var(--Primary_Dark);
                box-shadow: 0 0 50px var(--Primary_Yellow);
            }
    }
`;