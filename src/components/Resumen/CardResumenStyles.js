import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  background: var(--button-bg-white);
  border-radius: 15px;
  padding: 1.5rem 1rem;
  width: 100%;
  max-width: 620px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 721px) {
    max-width: 450px;
  }
`;

export const ProductCenterStyled = styled.div`
  display: flex;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  color: var(--button-bg-red);
  text-align: center;
  h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
  }

  @media (max-width: 721px) {
    img {
      width: 280px;
    }
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  color: red;
`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 2rem;
  background: black;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 721px) {
    font-size: 1.5rem;
  }
`;

export const ProductInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 5%;
  margin-bottom: 5%;
`;
