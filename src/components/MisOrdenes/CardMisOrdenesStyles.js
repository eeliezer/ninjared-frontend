import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1500px;
  margin: 0 auto;
  @media (max-width: 481px) {
    max-width: 300px;
    height: 100%;
    background-color: var(--button-bg-red);
    min-height: calc(100vh - 500px);
    margin: 5% auto;
    padding: 2rem 0px;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const PedidoContainerStyled = styled.div`
  background: var(--button-bg-white);
  width: 380px;
  border-radius: 15px;
  padding: 1rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h2`
  margin: 0;
  font-size: 1.2rem;

  @media (max-width: 481px) {
    font-size: 1rem;
  }
`;

export const IdStyled = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const PriceStyled = styled.p`
  font-weight: 800;
  font-size: 2rem;
  background: var(--button-bg-red);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

export const EmptyOrders = styled.h2`
  color: white;
  margin-top: 125px;
`;
