import styled from "styled-components";
import { BREAKPOINTS, LOGO } from "../../Constants";
import { NavLink as LinkRouter } from 'react-router-dom'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 6.66vh;
    display: grid;
    grid-template-rows: 1fr;
    border-bottom: 1px solid #eaeaea;
    z-index: 10;
    font-size: 1vw;

    @media (min-width:${BREAKPOINTS.xsm}) and (max-height:${BREAKPOINTS.sm}) {
        height: 15vh;
        font-size: 2vw;
    }

`


export const GeneralHeaderContainer = styled(HeaderContainer)`
    grid-area: header;    
    position: fixed;
    top: 0px;
    background: #fff;
    grid-template-columns: 7fr 1fr 2fr 1fr;
    grid-template-areas:
        "logo mobileicon menu navbtn";

    @media(max-width:${BREAKPOINTS.lg}) {
        grid-template-columns: 12fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas:
            "logo mobileicon menu navbtn";
    }

`

export const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    grid-area: logo
    align-items: center;
    cursor: pointer
`


export const Logo = styled.img.attrs({src: `${LOGO}`})`
    grid-area: logo;
    position: relative;
    width:40px;
    height:40px;
    cursor: pointer;
    margin-left:32px;
    top: calc(calc(100% - 40px) / 2);
`

export const MobileIcon = styled.div`
    display: none;
    grid-area: mobileicon;

    @media screen and (max-width: ${BREAKPOINTS.lg}) {
        display: block;
        position: relative;
        top: 0;
        right: 0;
        transform: translate(100%,25%);
        cursor: pointer;
    }
`
        
export const NavMenu = styled.ul`
    display: flex;
    grid-area: menu;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right:-22px;

    @media screen and (max-width: ${BREAKPOINTS.lg}) {
        display: none
    }
`

export const NavItem = styled.li`
    height: 100%;
`

export const NavLink = styled(LinkRouter)`
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    padding: 0 0.5vw;
    color: #000;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #4169E1;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    grid-area: navbtn;
    align-items: center;

    @media screen and (max-width: ${BREAKPOINTS.lg}) {
        display: none;
    }
`


export const NavBtnLink = styled(LinkRouter)`
    border-radius: 50px;
    background: #4169E1;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FFF;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #2d669d;
    }
`
