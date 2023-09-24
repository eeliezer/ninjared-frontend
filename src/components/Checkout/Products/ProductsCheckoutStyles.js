import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 45%;

  @media (max-width: 769px) {
    width: 85%;
    margin-bottom: 10%;
  }

  @media (max-width: 481px) {
    width: 100%;
  }
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--button-bg-white);
  text-transform: uppercase;
  text-align: center;
  margin-top: 5%;

  @media (max-width: 769px) {
    font-size: 1.8rem;
  }
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 80%;
  height: 440px;
  margin: 0 auto;
  color: var(--button-bg-red);
  text-transform: uppercase;
  overflow: auto;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg-disabled);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
    width: 100%;
  }

  @media (max-width: 769px) {
    width: 100%;
  }

  @media (max-width: 481px) {
    width: 100%;
    height: 300px;
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--button-bg-white);
  text-transform: uppercase;

  @media (max-width: 769px) {
    margin: 2rem auto 0px;
    width: 80%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    color: var(--button-bg-white);
    text-transform: uppercase;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: var(--button-bg-white);
  font-weight: 800;
  font-size: 1.3rem;
`;

export const HrStyled = styled.hr`
  margin: 1rem 0;
  color: var(--button-bg-white);
  opacity: 1;
`;

export const TextEmpty = styled.p`
  color: var(--button-bg-white);
`;
