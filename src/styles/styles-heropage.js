import styled from 'styled-components'

export const HeroContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const HeroTitle = styled.h2`
  max-width: 1200px;
  margin: auto;
  color: #fff;
  padding: 130px 100px;
  font-size: 60px;
  text-align: center;
`;

export const HeroContentLeftAlign = styled.div`  
  max-width: 1200px;
  margin: auto;
  color: #fff;
  padding: 60px 100px;

  @media (max-width: 767px) {
    padding: 32px;
  }

  h2 {
    font-size: 50px;

    @media (max-width: 767px) {
      font-size: 30px;
    } 
  }
  p {
    font-size: 20px;
    width: 500px;

    @media (max-width: 767px) {
      font-size: 16px;
      width: 100%;
    }
  }
`;

export const ImgContainer = styled.div`
  z-index: 1;
`;