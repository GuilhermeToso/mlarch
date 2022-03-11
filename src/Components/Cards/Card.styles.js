import styled from "styled-components";
import { BREAKPOINTS } from "../../Constants";

export const HomeCard = styled.div`
    position: relative;
    width: 608px;
    min-width: ${BREAKPOINTS.xsm};
    height: 349px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur( 25px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 20px;
    border: solid 2px transparent;
    background-clip: padding-box;
    box-shadow: 40px 40px 40px rgba(46,54, 68, 0.03);
    display: grid;
    grid-template-areas: 
        "home_card_title home_card_title"
        "home_card_text home_card_text"
        "home_card_btn_1 home_card_btn_2";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    @media(max-width: ${BREAKPOINTS.md}) {
        width: 90%;
        height: 50%;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas:
            "home_card_title"
            "home_card_text"
            "home_card_btn_1"
            "home_card_btn_2";
    }
`
