import styled from "styled-components"

export const SectionContainer = styled.section`
    width: 100%;
    height: 100%;
`

export const HomeSection = styled(SectionContainer)`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 6fr;
    grid-template-areas: 
        "title"
        "description"
        "button"
        "animation";
    scroll-snap-align: start;
    padding-top:4%;
`

export const AppsSection = styled(SectionContainer)`
    scroll-snap-align: start;
`

export const NoCodeSection = styled(SectionContainer)`
    scroll-snap-align: start;
`