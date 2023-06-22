import styled from "styled-components";

export const ResWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
`;

export const ResMain = styled.div`
    height: 70%;
    width: 70%;
    background-color: transparent;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    &>div{
        width: 100%;
        &:first-child{
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--Primary_Yellow);
            border-radius: 100px;
            &>p {
                font-size: 4vh;
                font-weight: bold;
                color: var(--Primary_White);
            }
        }
        &:last-child{
            height: 90%;
            display: flex;
            align-content: center;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
`;

export const EachRes = styled.div`
    height: 40%;
    width: 29%;
    border-radius: 30px;
    margin: 20px;
    background-color: var(--Primary_White);
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    overflow: hidden;
    transition-duration: .2s;

    &.Correct {
        background: var(--Primary_Green);
        &:hover {
            box-shadow: 0 0 50px var(--Primary_Green);
        }
    }
    &.Wrong {
        background: var(--Primary_Red);
        &:hover {
            box-shadow: 0 0 50px var(--Primary_Red);
        }
    }
    &:hover {
        &>div:first-child {
            display: flex;
        }
    }
    &> div{
        height: 100%;
        width: 100%;
        overflow: hidden;
        &:first-child{
            top:0;
            left: 0;
            display: none;
            position: absolute;
            backdrop-filter: blur(10px);
            background-color: rgb(0,0,0, 0.5);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &>div{
                height: fit-content;
                &>p{
                    margin: 0;
                    font-size: 2vh;
                    font-weight: bold;
                    letter-spacing: 1px;
                    color: var(--Primary_White);
                }
            }
        }
        &:last-child{
            display: grid;
            place-items: center;
            background-color: transparent;
            &>img {
                height: 100%;
            }
        }
    }
`;

export const ResBtns = styled.div`
    height: 10%;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    &>a {
        text-decoration: none;
        padding: 20px 30px;
        border-radius: 20px;
        margin: 0 10px;
        font-size: 2vh;
        font-weight: bold;
        transition-duration: .2s;
        &:first-child {
            background-color: var(--Primary_Yellow);
            color: var(--Primary_Dark);
            &:hover {
                box-shadow: 0 0 50px var(--Primary_Yellow);
                background-color: var(--Secondary_Dark);
                color: var(--Primary_White);
            }
        }
        &:last-child{
            background-color: var(--Secondary_Dark);
            color: var(--Primary_White);
            &:hover {
                box-shadow: 0 0 50px var(--Primary_Yellow);
                background-color: var(--Primary_Yellow);
                color: var(--Primary_Dark);
            }
        }
    }
`