import styled from "styled-components";

export const HomeButton = styled.button`
    width: 15%;
    min-width: 200px;
    height: 60%;
    left: min(calc(calc(100vw - 200px) / 2),42.5%);
    top: 10%;
    border-radius: 25px;
    cursor: pointer;
`

export const GetStarted = styled(HomeButton)`
    position: relative;
    background: #4169E1;;
    box-shadow: 
        -5px -5px 12px 0px rgba(255, 255, 255, 0.18),
        5px 5px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    grid-area: ${props => props.GridArea};
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #2d669d;
    }

    &:active {
        background: #a4d2ff;
    }
`

export const LearnMore = styled(HomeButton)`
    background: rgba(255, 94, 0, 0);
    border: 1px solid rgba(255, 254, 254, 1);
    box-shadow: 
        -5px -5px 12px 0px rgba(255, 255, 255, 0.18),
        0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    grid-area: ${props => props.GridArea};
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    };

    &:active {
        border: 1px solid rgba(150, 150, 150, 1);
    }
`