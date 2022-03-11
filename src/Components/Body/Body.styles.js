import styled from "styled-components";
import { BREAKPOINTS } from "../../Constants";

export const Body = styled.div`
    position: absolute;    
    width: 100%;
    height: 100%;
    display grid;
`

export const HomeBody = styled(Body)`
    grid-template-rows: 1fr 14fr;
    grid-template-columns: 1fr;
    grid-template-areas: 
        "header"
        "main";

    @media (min-width:${BREAKPOINTS.xsm}) and (max-height:${BREAKPOINTS.sm}) {
        grid-template-rows: 3fr 5fr;
    }
`
// background: url(${BACKGROUND}) no-repeat center center fixed;
// -webkit-background-size: cover;
// -moz-background-size: cover;
// -o-background-size: cover;
// background-size: cover;
// display: flex;
// justify-content: center;
// align-items: center;


export const GeneralBody = styled(Body)`
    grid-template-rows: 1fr 11fr;
    grid-template-columns: 1fr;
    grid-template-areas: "header"
                         "main"   
`

export const HeadMainBody = styled(Body)`
    grid-template-rows: 1fr 15fr;
    grid-template-columns: 1fr;
    grid-template-areas:
        "header"
        "main"
`
