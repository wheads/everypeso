import styled from 'styled-components'

export const HideOnMobile = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const HideOnTablet = styled.span`
  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
`;

export const HideOnDesktop = styled.span`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const HideOnMobileAndTablet = styled.span`
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const HideOnTabletAndDesktop = styled.span`
  @media (min-width: 768px) {
    display: none;
  }
`;