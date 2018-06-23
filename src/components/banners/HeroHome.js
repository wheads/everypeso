import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { HeroContainer, HeroContent, HeroTitle, HeroSub, ImgContainer } from '../../styles/styles-herohome'
import bannerImg from './img-hand-holding-coins.png'

const SignUpButton = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 18px;
  line-height: 1.25;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  min-width: 240px;
  background-color: #146414;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;

const HeroHome = () => (
  <HeroContainer>
    <HeroContent>
      <HeroTitle>Every Peso Counts</HeroTitle>
        
      <HeroSub>Saving money is easy! All you need is a proper plan. Big or small, your income won't matter much, it's just a matter of discipline through budgeting.</HeroSub>
      <SignUpButton to="/get-started">
        Learn More
      </SignUpButton>  
    </HeroContent>
    
      <ImgContainer>
        <img style={{marginBottom:`-7px`}} alt="Financial education" src={bannerImg} />
      </ImgContainer>
      
  </HeroContainer>
)

export default HeroHome