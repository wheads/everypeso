import React from 'react'
import { HeroContainer, HeroContentLeftAlign } from '../../styles/styles-heropage'
import bannerImg from './img-hero-banner-tools.png'


const HeroToolsPage = () => (
  <HeroContainer style={{backgroundImage:`url(` + bannerImg + `)`}}>    
    <HeroContentLeftAlign>
      <h2>Tools & Resources</h2>
      <p>Looking for the best tools to help you stay focused and on track in your financial journey? You’ll find them here!</p>
    </HeroContentLeftAlign>
  </HeroContainer>
)

export default HeroToolsPage