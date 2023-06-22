import styled from "styled-components";

export const NotFoundMain = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: var(--Primary_Dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>p {
        width: fit-content;
        font-size: 10vh;
        color: var(--Primary_White);
        font-weight: bold;
    }
    &>a {
        width: fit-content;
        text-decoration: none;
        padding: 30px 100px;
        border-radius: 20px;
        margin: 0 10px;
        font-size: 2vh;
        font-weight: bold;
        background-color: var(--Secondary_Dark);
        color: var(--Primary_White);
        transition-duration: .2s;
        &:hover {
            box-shadow: 0 0 50px var(--Primary_Yellow);
            background-color: var(--Primary_Yellow);
            color: var(--Primary_Dark);
        }
    }
`