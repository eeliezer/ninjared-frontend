import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 85%;
  background: var(--background-card-white);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }

  @media (max-width: 1281px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    gap: 15px;
    width: 85%;
    background: var(--background-card-white);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px 5px;
    padding: 1rem;
    border-radius: 15px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 803px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    gap: 15px;
    width: 60%;
    background: var(--background-card-white);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px 5px;
    padding: 1rem;
    border-radius: 15px;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 769px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    gap: 15px;
    width: 55%;
    background: var(--background-card-white);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px 5px;
    padding: 1rem;
    border-radius: 15px;
    flex-direction: column;
  }

  @media (max-width: 481px) {
    flex-direction: column;
    border-radius: 5px;

    img {
      width: 50px;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;

export const CardInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  @media (max-width: 481px) {
    align-items: center;
  }
`;

export const ProductTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 0.9rem;

  @media (max-width: 481px) {
    align-items: center;
  }
`;

export const TextStyled = styled.h3`
  margin: 0;
  color: #666;
  font-size: 0.8rem;
`;

export const PriceStyled = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: 2rem;
  background: var(--button-bg-red);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 481px) {
    font-size: 1rem;
  }
`;

export const QuantityContainerStyled = styled.span`
  display: flex;
  align-items: center;
`;
