import React from 'react';
import styled from "styled-components";
import ToolInvestmentQuiz from '../../components/tools/ToolInvestmentQuiz';
import PageLayout from '../../components/layouts/PageLayout'
import HeroInvestQuizPage from '../../components/banners/HeroInvestQuizPage'

const ToolContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;

  @media (max-width: 1111px) {
    display: block;
  }
`;

const IFrameContainer = styled.iframe`
  width: 100%;
  height: 356px;
  border: none;
  background-color: #FFFFFF;
`;

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }
  componentWillUnmount() {    
  }

  onClick(investmentData)
  {    
    this.setState({
      data: 
        {
          
        },
    });
  }

  render(){
    
    return(
    <ToolContainer >
      <ToolInvestmentQuiz onClick={e => this.onClick(e)} />
      <IFrameContainer src="https://4374kf.imgcorp.com/register/" />
    </ToolContainer>);
  }
}

const InvestmentQuiz = () => (
  <PageLayout>
    <HeroInvestQuizPage />
    <App/>  
  </PageLayout>
)

export default InvestmentQuiz
