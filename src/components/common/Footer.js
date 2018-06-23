import React from 'react'
import { Link } from 'gatsby'
import { FooterContainer, MainFooter, SubFooter, Logo, FooterSection, FooterSectionTitle  } from '../../styles/styles-footer'
import { HideOnMobile, HideOnTabletAndDesktop } from '../../styles/styles-responsive'
import logo from './img-everypeso-logo-new-gray.svg'
import facebook from './img-facebook.svg'
import twitter from './img-twitter.svg'
import instagram from './img-instagram.svg'
import styled from 'styled-components'

const MenuLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #69757a;

  &:hover {
    color: #424242;
  }
`;

const Icons = styled.img`
  width: 24px;
  margin-right: 8px;
  margin-bottom: 0;
`;

const Footer = ({ siteTitle }) => (
  <FooterContainer>
    <MainFooter>
      <div>
        <Link to="/">
          <Logo src={logo} alt={siteTitle} />
        </Link>
        <p style={{color:`#aaa`}}>© 2018 EveryPeso.com</p>
        <p>
          <Link to="/"><Icons src={facebook} alt="facebook" /></Link>
          <Link to="/"><Icons src={twitter} alt="twitter" /></Link>
          <Link to="/"><Icons src={instagram} alt="instagram" /></Link>
        </p>
      </div>
      <SubFooter>
        <FooterSection>
          <FooterSectionTitle>INFO</FooterSectionTitle>
          <MenuLink to="#">About Us</MenuLink>
          <MenuLink to="#">Success Stories</MenuLink>
          <MenuLink to="#">Blog</MenuLink>
        </FooterSection>
        <FooterSection>
          <FooterSectionTitle>SUPPORT</FooterSectionTitle>
          <MenuLink to="#">Contact Us</MenuLink>
          <MenuLink to="#">Privacy Policy</MenuLink>
          <MenuLink to="#">Terms of Use</MenuLink>
        </FooterSection>
        <HideOnMobile>
          <FooterSection>
            <FooterSectionTitle>RESOURCES</FooterSectionTitle>
            <MenuLink to="#">Classes</MenuLink>
            <MenuLink to="#">Events</MenuLink>
            <MenuLink to="/tools">Tools</MenuLink>
          </FooterSection>
        </HideOnMobile>  
      </SubFooter>
      <HideOnTabletAndDesktop>
        <SubFooter>
          <FooterSection>
            <FooterSectionTitle>RESOURCES</FooterSectionTitle>
            <MenuLink to="#">Classes</MenuLink>
            <MenuLink to="#">Events</MenuLink>
            <MenuLink to="/tools">Tools</MenuLink>
          </FooterSection>
        </SubFooter>
      </HideOnTabletAndDesktop>    
    </MainFooter>  
  </FooterContainer>
)

export default Footer
