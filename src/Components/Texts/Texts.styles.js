import styled from "styled-components";

export const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    padding: 32px 0;
    color: #E7E7E7;
    grid-area: ${props => props.GridArea}
`


export const Description = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #E7E7E7;
    grid-area: ${props => props.GridArea}
`

export const ButtonLabel = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: ${props => props.Color};
`