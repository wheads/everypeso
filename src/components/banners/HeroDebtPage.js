import React from 'react'
import { HeroContainer, HeroTitle } from '../../styles/styles-heropage'
import bannerImg from './img-hero-banner-debt.jpg'

const HeroDebtPage = () => (
  <HeroContainer style={{backgroundImage:`url(` + bannerImg + `)`}}>
    <HeroTitle>Debt</HeroTitle>
  </HeroContainer>
)

export default HeroDebtPage