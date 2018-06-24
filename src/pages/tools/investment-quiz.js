import React from 'react';
import styled from "styled-components";
import ToolInvestmentQuiz from '../../components/tools/ToolInvestmentQuiz';
import PageLayout from '../../components/layouts/PageLayout'
import HeroInvestQuizPage from '../../components/banners/HeroInvestQuizPage'

const ToolContainer = styled.div`
  display: block;
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
