import React from 'react' 
// import styled from 'styled-components'
// import BarChart from '../../components/tools/BarChart'
// import ToolInvestmentCalc from '../../components/tools/ToolInvestmentCalc'
// import bgImage from './img-funky-lines.png';
// import retireImage from './icons8-coins-50.png';
// import saveMoney from './icons8-stack-of-money-50.png';
// import saveSoda from './icons8-soda-50.png';
// import saveResto from './icons8-restaurant-table-50.png';

import { PageContainer, PageContent, PageTitle } from '../../styles/styles-page' // you can delete these styles after putting the tool app

import PageLayout from '../../components/layouts/PageLayout'
import HeroInvestCalcPage from '../../components/banners/HeroInvestCalcPage'

// Please put additional code here.

const InvestmentCalculatorPage = () => (
  <PageLayout>
    <HeroInvestCalcPage />
    <PageContainer>
      <PageContent>
        <PageTitle>
          Put tool app here.
        </PageTitle>
      </PageContent>
    </PageContainer>  
  </PageLayout>
)

export default InvestmentCalculatorPage
