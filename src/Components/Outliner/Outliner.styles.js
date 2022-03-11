import styled from "styled-components";
import { BREAKPOINTS } from "../../Constants";


export const OutlineContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 36px auto;
    grid-template-areas: 
        "iconbutton outliner"
`

export const OutlineStyle = styled.div`
    width: 100%;
    height: 100%;
    background: #FAFAFA;
    box-shadow: -3px 4px 8px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    grid-area: outliner;

    @media(max-width:${BREAKPOINTS.md}) {
        display: none;
    }

`