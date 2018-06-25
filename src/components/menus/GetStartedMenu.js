import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { HideOnMobile, HideOnTabletAndDesktop } from '../../styles/styles-responsive'
import MobileGetStartedMenu from './MobileGetStartedMenu';

const MenuContainer = styled.div`
  background-color: #146144;
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
  color: #fff;
  padding: 0 1.5rem;
  &:hover{
    text-decoration: underline;
  }
`;

const GetStartedMenu = () => (
  <MenuContainer>
    <MenuLink to="#">Debt</MenuLink>
    <MenuLink to="#">Budgeting</MenuLink>
    <HideOnMobile>
      <MenuLink to="#">Savings</MenuLink>
      <MenuLink to="#">Retirement</MenuLink>
      <MenuLink to="#">Insurance</MenuLink>
    </HideOnMobile>
    <HideOnTabletAndDesktop>
      <MobileGetStartedMenu />
    </HideOnTabletAndDesktop>
  </MenuContainer>
)

export default GetStartedMenu