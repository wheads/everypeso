import React, { Component } from 'react';
import styled from "styled-components";
import { select } from 'd3-selection'
import checkImg from './img-check.png';
import crossImg from './img-cross.png';

const Container = styled.div`
  margin: 0px;
  position: relative;
`;

const ContainerSub = styled.div`
  margin: 0px;
  padding: 0px 30px;
  margin-bottom: calc(4.5vw + 4.5vh + .5vmin);
  height: 100%;
  
  @media (max-width: 768px) {
    margin: 0px;
    padding: 0px 10px;
    margin-bottom: calc(2.5vw + 2.5vh + 2vmin);
    height: 100%;
  }
`;

const QuestionDiv = styled.div`
  margin: 1em 0.01em 0.5em 0.01em;
  font-size: calc(0.75vw + 0.75vh + .5vmin);
  color: #3a3e4b;
  text-align: left;
  font-weight: bold;

  @media (max-width: 768px) {
    //font-size: calc(1vw + 1vh + .5vmin);
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const Radio = styled.input`
  height: calc(0.5vw + 0.5vh + .5vmin);
  width: calc(0.5vw + 0.5vh + .5vmin);
  cursor: pointer;

  @media (max-width: 768px) {
    height: calc(0.75vw + 0.75vh + .5vmin);
    width: calc(0.75vw + 0.75vh + .5vmin);
  }
`;

const AnswerChoice = styled.div`
  margin: 0px;
  font-size: calc(0.75vw + 0.75vh + .5vmin);
  color: #3a3e4b;
  text-align: left;

  @media (max-width: 768px) {
    //font-size: calc(1vw + 1vh + .5vmin);
    font-size: 12px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

const DetailedAnswer = styled.div`
  margin: 5px;
  font-size: calc(0.5vw + 1vh + .5vmin);
  font-weight: 500;
  color: green;
  color: #004086;
  display: block;
  text-align: left;
  display: none;

  @media (max-width: 768px) {
    font-size: calc(1vw + 1vh + .5vmin);
  }
`;

const DetailedAnswerSub = styled.div`
  margin-top: 10px;
`;

const AnswersIcon = styled.img`
  margin: 0px 0.5em 0px 0px;
  width: calc(0.5vw + 0.5vh + .5vmin);
  height: calc(0.5vw + 0.5vh + .5vmin);
  opacity: 0;
`;

class SlidingQuestion extends Component {   
  
  constructor(props) {
    super(props);

    this.state = {
      left: 0
    }    
  }
  
  componentDidMount() {    

  }
  
  componentWillUnmount() {    
    
  }

  onKeyDown(e)
  {
    // var event = e;

    if(e.keyCode === 9)
      e.preventDefault();
  }

  onOptionChange(e)
  {    
    //e.preventDefault();
    this.props.question.answer = e.currentTarget.value;
    for(var i=0;i < this.props.question.options.length; i++)
    {
      this.props.question.options[i].selected = (e.currentTarget.value === this.props.question.options[i].value) ? "true" : "";
      this.props.question.options[i].img = (this.props.question.options[i].value === this.props.question.expected) ? checkImg : crossImg;

      this.setState({ ["option" + i]:  (e.currentTarget.value === this.props.question.options[i].value) ? "true" : "" })
    }
    select("#next" + this.props.question.number).style("pointer-events",'auto').style('background-color','orange')
    
    if(this.props.question.number===10)
    {
      select("#next10").style('display','block')
      select("#next10").style('background-color','green')
    }

    this.props.onOptionChange(this.props.question);
    
  }


  render() {
    const {question} = this.props

    return (
        <Container style={{display:'table-cell'}}>            

            <ContainerSub style={{width: this.props.Width, height: this.props.Height}}>
              <div style={this.props.style}>
                <QuestionDiv>{question.number}.&nbsp;{question.text}
                </QuestionDiv>
                <AnswerChoice>
                {question.options.map((options, index) =>
                  <label>              
                    <AnswersIcon id={'rdimg' + question.number + options.value} src={options.img} />
                    <Radio
                      type="radio"
                      id={"rd" + question.number + options.value}
                      name={question.name+question.number}
                      value={options.value}
                      onKeyDown={(e) => this.onKeyDown(e)}
                      checked={this.state["option" + index]}
                      onChange={(e) => this.onOptionChange(e)} 
                    />
                    &nbsp;
                    {options.text}<br/>
                  </label>
                  )}
                </AnswerChoice>
                <DetailedAnswer id={"detail" + question.number}>
                    <strong>Detailed Answer :</strong>&nbsp;&nbsp;
                    <DetailedAnswerSub>{question.detailAnswer}</DetailedAnswerSub>
                    <DetailedAnswerSub>{question.detailAnswer2}</DetailedAnswerSub>
                    <DetailedAnswerSub style={{display:'inline'}}>{question.detailAnswer3}</DetailedAnswerSub>
                    <strong><a style={{paddingLeft: '10px'}} href={question.link}>{question.linkText}</a></strong>
                </DetailedAnswer>
              </div>
            </ContainerSub>
        </Container>
    );
  }
}

export default SlidingQuestion;