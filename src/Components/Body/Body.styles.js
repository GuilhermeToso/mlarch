import styled from "styled-components";
import { BACKGROUND } from "../../Constants";

export const Body = styled.div`
    position: absolute;    
    width: 100%;
    height: 100%;
    display grid;
`

export const HomeBody = styled(Body)`
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    background: url(${BACKGROUND}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AboutBody = styled(Body)`
    grid-template-rows: 80px auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header"
                         "text draw"   
`