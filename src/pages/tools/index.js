import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { PageContainer, PageContent } from '../../styles/styles-page'
import babysteps from './img-baby-steps.jpeg'
import jonsiu from './img-jon-siu.jpg'
import newsletter from './img-newsletter.jpeg'
import investcalc from './img-invest-calc.jpeg'
import investquiz from './img-invest-quiz.jpeg'

import PageLayout from '../../components/layouts/PageLayout'
import HeroToolsPage from '../../components/banners/HeroToolsPage'
import ToolsMenu from '../../components/menus/ToolsMenu'

const Section = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: #005b98;
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.75rem 3rem;
  border-top: solid 1px #e8eced;
  padding: 2rem 0 2.5rem;

  @media (max-width: 767px) {
    display: block;
    margin: 0;
  }
`;

const SectionBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;

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
        <Section>
          <SectionTitle id="get-started">Get Started</SectionTitle>
          <SectionContent>
            <img style={{marginBottom:`0`}} src={babysteps} alt="baby steps" />
            <SectionBody>
              <h3>Jon Siu's 8 Baby Steps</h3>
              <p>The 8 Baby Steps are the foundation for helping you get out of debt, save money, build wealth, and change your future.</p>
              <SectionLink to="">Learn the 8 baby steps</SectionLink>
            </SectionBody>  
          </SectionContent>
          <SectionContent>
            <img style={{marginBottom:`0`}} src={jonsiu} alt="Jon Siu" />
            <SectionBody>
              <h3>Ask Jon</h3>
              <p>Hear Jon’s answers to some of the most common money questions his webinar listeners have asked over the years.</p>
              <SectionLink to="">See Jon's Answers</SectionLink>
            </SectionBody>  
          </SectionContent>
          <SectionContent>
            <img style={{marginBottom:`0`}} src={newsletter} alt="newsletter" />
            <SectionBody>
              <h3>Weekly Newsletter</h3>
              <p>Stay connected with us and get expert money advice to work the Baby Steps faster, grow your business, get investment tips and more!</p>
              <SectionLink to="">Sign-Up (They're Free!)</SectionLink>
            </SectionBody>  
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle id="investing">Investing</SectionTitle>
          <SectionContent>
            <img style={{marginBottom:`0`}} src={investcalc} alt="investment calculator" />
            <SectionBody>
              <h3>Investment Calculator</h3>
              <p>Calculate your estimated retirement savings with our investment calculator and connect with a local investment professional to help you reach your goal.</p>
              <SectionLink to="/tools/investment-calculator">Calculate Now</SectionLink>
            </SectionBody>  
          </SectionContent>
          <SectionContent>
            <img style={{marginBottom:`0`}} src={investquiz} alt="investment quiz" />
            <SectionBody>
              <h3>Investment Quiz</h3>
              <p>Think you know investing? Take the short quiz to find out how much you know. Don't worry, we'll explain the correct answers to you after you take the quiz. Good luck!</p>
              <SectionLink to="#">Start Quiz</SectionLink>
            </SectionBody>  
          </SectionContent>
        </Section>
      </PageContent>  
    </PageContainer>
  </PageLayout>
)

export default ToolsPage
