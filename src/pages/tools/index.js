import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { PageContainer, PageContent } from '../../styles/styles-page'
import investcalc from './img-invest-calc.jpeg'
import investquiz from './img-invest-quiz.jpeg'

import PageLayout from '../../components/layouts/PageLayout'
import HeroToolsPage from '../../components/banners/HeroToolsPage'
import ToolsMenu from '../../components/menus/ToolsMenu'

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 20px;
  position: relative;
  margin-bottom: 20px;
  border-top: solid 1px #e8eced;

  @media (max-width: 767px) {
    display: block;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: #005b98;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
  // margin: 0.75rem 3rem;
  padding: 2rem 1rem;
  text-align: center;

  @media (max-width: 767px) {
    display: block;
    margin: 0;
  }
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  // padding-left: 3rem;

  h3, p {
    margin-bottom: 1rem;
  }

  h3 {
    color: #0073b9;
    font-size: 1.5rem;
  }

  @media (max-width: 767px) {
    padding-left: 0;
  }
`;

const SectionLink = styled(Link)`
  color: #0091d9;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const ToolsPage = () => (
  <PageLayout>
    <HeroToolsPage />
    <ToolsMenu />
    <PageContainer>
      <PageContent>        
        <SectionTitle id="investing">Investing</SectionTitle>
        <Section>
          <SectionContent>
            <img src={investcalc} alt="investment calculator" />
            <SectionBody>
              <h3>Investment Calculator</h3>
              <p>Calculate your estimated retirement savings with our investment calculator and connect with a local investment professional to help you reach your goal.</p>
              <SectionLink to="/tools/investment-calculator">Calculate Now</SectionLink>
            </SectionBody>  
          </SectionContent>
          <SectionContent>
            <img src={investquiz} alt="investment quiz" />
            <SectionBody>
              <h3>Investment Quiz</h3>
              <p>Think you know investing? Take the short quiz to find out how much you know. Don't worry, we'll explain the correct answers to you after you take the quiz. Good luck!</p>
              <SectionLink to="/tools/investment-quiz">Start Quiz</SectionLink>
            </SectionBody>  
          </SectionContent>
        </Section>
      </PageContent>  
    </PageContainer>
  </PageLayout>
)

export default ToolsPage
