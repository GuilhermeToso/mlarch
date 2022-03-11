import styled from "styled-components";

export const Title = styled.h1`
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 800;
    font-size: min(48px,4vw);
    line-height: 56px;
    text-align: center;
    color: #0F0F0F;
    grid-area: ${props => props.GridArea};
`


export const Description = styled.h3`
    width: 100%;
    height: 100%;
    position: relative;
    font-family: Roboto;
    font-style: normal;
    font-weight: 800;
    font-size: min(36px,3vw);
    line-height: 28px;
    text-align: center;
    color: #0f0f0f;
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
export const LinkLabel = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
`
