import styled from 'styled-components'

export const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 48px 32px;
  margin: auto;
  background-color: #fff;

  @media (max-width: 767px) {
    padding: 22px 32px;
  }
`;

export const MenuContainer = styled.div`
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 0;
`;