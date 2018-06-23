import React from 'react'
import { Link } from 'gatsby'
import { MainHeader, Logo, MenuContainer  } from '../../styles/styles-header'
import { HideOnTablet, HideOnMobile, HideOnTabletAndDesktop } from '../../styles/styles-responsive'
import logo from './img-everypeso-logo-new.svg'
import styled from 'styled-components'
import MobileHeaderMenu from '../menus/MobileHeaderMenu';

const MenuLink = styled(Link)`
  margin-left: 24px;
  font-size: 16px;
  text-decoration: none;
  color: #69757a;
  
  &:hover {
    color: #424242;
  }

  @media (max-width: 767px) {
    margin: 0;
    padding: 10px;
  }
`;

const SignUpButton = styled(Link)`
  display: inline-block;
  padding: 8px 24px;
  margin-left: 24px;
  border: 1px solid #146414;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #fff;
  color: #146414;
  &:hover{
    background-color: #146414;
    color: #fff;
  }
`;

const Header = ({ siteTitle }) => (
  <MainHeader>
    <div>
      <Link to="/">
        <Logo src={logo} alt={siteTitle} />
      </Link>
    </div>
    <HideOnMobile>
      <MenuContainer>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="#">Classes</MenuLink>
        <MenuLink to="#">Events</MenuLink>
        <MenuLink to="/tools">Tools</MenuLink>
        <HideOnTablet><MenuLink to="#">Contact</MenuLink></HideOnTablet>
        <SignUpButton to="/get-started">Get Started</SignUpButton>
      </MenuContainer>
    </HideOnMobile>  
    <HideOnTabletAndDesktop>
      <MobileHeaderMenu />
    </HideOnTabletAndDesktop>
  </MainHeader>
)

export default Header
