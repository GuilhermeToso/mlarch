import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../Constants'
import { GeneralHeaderContainer, NavItem, NavLink, Logo, MobileIcon, NavMenu , LogoContainer, NavBtn, NavBtnLink} from './Header.styles'
import { UilBars } from '@iconscout/react-unicons'
import { Auth } from '../../Services/Auth'

function GeneralHeader(props) {

    const navigate = useNavigate()

    function goTo(event, path) {
        event.preventDefault()
        navigate(path)
    }

  return (
    <GeneralHeaderContainer>
        <LogoContainer>
          <Logo onClick={event =>{Auth.isAuth ? goTo(event,PATHS.userHome) : goTo(event,PATHS.home)} }></Logo> 
        </LogoContainer>
        <MobileIcon>
          <UilBars size={40}></UilBars>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to={PATHS.about}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={PATHS.services}>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={PATHS.pricing}>Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={PATHS.team}>Team</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to={PATHS.signin}>Sign In</NavBtnLink>
        </NavBtn>
    </GeneralHeaderContainer>
  )
}

export {GeneralHeader}