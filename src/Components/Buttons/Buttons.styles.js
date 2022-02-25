import styled from "styled-components";

export const Button = styled.button`
    position: absolute;
    width: 80%;
    height: 60%;
    left: 10%;
    top: 10%;
    border-radius: 25px;
`

export const GetStarted = styled(Button)`
    background: rgba(254, 93, 0, 1);
    box-shadow: 
        -5px -5px 12px 0px rgba(255, 255, 255, 0.18),
        5px 5px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    grid-area: ${props => props.GridArea}
`

export const LearnMore = styled(Button)`
    background: rgba(255, 94, 0, 0);
    border: 1px solid rgba(255, 254, 254, 1);
    box-shadow: 
        -5px -5px 12px 0px rgba(255, 255, 255, 0.18),
        0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    grid-area: ${props => props.GridArea}
`