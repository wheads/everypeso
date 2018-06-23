import styled from 'styled-components'

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 28px;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 50px;
  padding: 20px 0 0 32px;
  background-color: #fffbce;
  border-radius: 3px;

  @media (max-width: 767px) {
    display: block;
    text-align: center;
    padding: 0;
    margin: 0 32px 40px;
  }
`;

export const HeroContent = styled.div`
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 0 20px 0;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 60px;
  color: #495257;

  @media (max-width: 767px) {
    font-size: 36px;
    padding: 20px 10px 0;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 36px;
  }
`;

export const HeroSub = styled.h1`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: #69757a;

  @media (max-width: 767px) {
    padding: 10px 20px 0;
  }
`;

export const ImgContainer = styled.div`

  @media (max-width: 767px) {
    padding: 25px 0 0;
  }
`;