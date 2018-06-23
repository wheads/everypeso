import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 2.25rem auto 0;
`;

export const PageContent = styled.div`
  flex: 0 55.5rem;
  margin: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2.25rem;

  @media (max-width: 767px) {
    font-size: 1.9rem;
  }
`;

export const PageParag = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;