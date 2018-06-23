import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { HideOnMobile, HideOnTabletAndDesktop } from '../../styles/styles-responsive'
import MobileToolsMenu from './MobileToolsMenu';

const MenuContainer = styled.div`
  background-color: #f5f7f8;
  text-align: center;
  padding: 1.125rem 0;
  position: relative;
  
  @media (max-width: 767px) {
    display: flex;
    padding: 8px 0;
    justify-content: space-around;
  }
`;

const MenuLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #0073b9;
  padding: 0 1.5rem;
  &:hover{
    text-decoration: underline;
  }
`;

const ToolsMenu = () => (
  <MenuContainer>
    <HideOnMobile>
      <span style={{fontSize:`18px`,fontWeight:`bold`,textTransform:`uppercase`,color:`#b6bec2`,padding:`0 1.5rem`}}>Tools By Topic</span>
      <MenuLink to="#get-started">Get Started</MenuLink>
      <MenuLink to="#investing">Investing</MenuLink>
      <MenuLink to="#">Debt</MenuLink>    
      <MenuLink to="#">Budgeting</MenuLink>
      <MenuLink to="#">Retirement</MenuLink>
      <MenuLink to="#">Insurance</MenuLink>
    </HideOnMobile>  
    <HideOnTabletAndDesktop>
      <MobileToolsMenu />
    </HideOnTabletAndDesktop>
  </MenuContainer>
)

export default ToolsMenu