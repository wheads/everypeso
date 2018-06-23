import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: #f8f8f8;
  
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const MainFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 112px 32px;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 50px 32px 0;
  }
`;

export const SubFooter = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    text-align: left;
    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 0;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const FooterSectionTitle = styled.h3`
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;