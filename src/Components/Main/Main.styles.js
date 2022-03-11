import styled from "styled-components"
import { BREAKPOINTS } from "../../Constants"
export const Main = styled.div`
    grid-area: main;
    width: 100%;
    height: 100%;
`

export const HomeMain = styled(Main)`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 93.33vh;

    @media (min-width:${BREAKPOINTS.xsm}) and (max-height:${BREAKPOINTS.sm}) {
        height: 85vh;
    }
`

export const AboutMain = styled(Main)`    
`

export const PricingMain = styled(Main)``


export const ServicesMain = styled(Main)``


export const TeamMain = styled(Main)``


export const SignInMain = styled(Main)``