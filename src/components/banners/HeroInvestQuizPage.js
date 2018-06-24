import React from 'react'
import { HeroContainer, HeroContentLeftAlign } from '../../styles/styles-heropage'
import bannerImg from './img-hero-banner-invest-calc.png'


const HeroInvestQuizPage = () => (
  <HeroContainer style={{backgroundImage:`url(` + bannerImg + `)`}}>    
    <HeroContentLeftAlign>
      <h2>Investment Quiz</h2>
      <p>Think you know investing? Take the short quiz to find out how much you know. Don't worry, we'll explain the correct answers to you after you take the quiz. Good luck!</p>
    </HeroContentLeftAlign>
  </HeroContainer>
)

export default HeroInvestQuizPage