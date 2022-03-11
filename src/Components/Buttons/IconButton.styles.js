import styled from "styled-components";
import { BREAKPOINTS } from "../../Constants";

export const IconButton = styled.button`
    width: 36px;
    height: 36px;
    display: none;
    grid-area: iconbutton;

    @media(max-width:${BREAKPOINTS.md}) {
        display:inline;
    }
`
