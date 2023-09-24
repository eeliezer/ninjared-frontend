import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
  color: var(--button-bg-white);
  gap: 75px;
  width: 100%;
  h1 {
    margin-bottom: 2rem;
    font-family: 'Quantico', sans-serif;
  }

  @media (max-width: 769px) {
    display: flex;
    color: var(--button-bg-white);
    gap: 75px;
    flex-direction: column;
  }
`;

export const ContainerCarousel = styled.div`
  width: 100%;
`;

export const LogoHeroimg = styled.img`
  width: 200px;
`;
