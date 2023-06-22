import styled from "styled-components";

export const NavWrap = styled.div`
    position: absolute;
    height: 60px;
    width: 1400px;

    top: 50px;
    left: 50%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 0 10px;
    background-color: transparent;
    z-index: 1;

    transform: translate(-50%, 0);
`;

export const NavLogo = styled.p`
    text-transform: capitalize;
    font-size: 1.3vh;
    color: var(--Primary_White)
`;  