import React from 'react'
import { HeroContainer, HeroContentLeftAlign } from '../../styles/styles-heropage'
import bannerImg from './img-hero-banner-invest-calc.png'


const HeroToolsPage = () => (
  <HeroContainer style={{backgroundImage:`url(` + bannerImg + `)`}}>    
    <HeroContentLeftAlign>
      <h2>Investment Calculator</h2>
      <p>Calculate your estimated retirement savings with our investment calculator and connect with a local investment professional to help you reach your goal.</p>
    </HeroContentLeftAlign>
  </HeroContainer>
)

export default HeroToolsPage