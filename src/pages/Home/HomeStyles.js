import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  h2 {
    font-weight: 400;
  }
`;

export const CategoriasWrapper = styled.section`
  margin-top: 2%;
  @media (max-width: 481px) {
    margin-top: 0rem;
    h2 {
      text-align: center;
      text-transform: uppercase;
    }
  }
`;

export const ProductosWrapper = styled.section`
  padding-top: 2rem;
  @media (max-width: 481px) {
    padding-top: 1rem;
    h2 {
      text-transform: uppercase;
      font-size: 1.3rem;
    }
  }
`;

export const RecomendadosWrapper = styled.section`
  margin-top: 5rem;
  width: 100%;
  margin-bottom: 5%;
  h2 {
    font-weight: 400;
  }

  @media (max-width: 481px) {
    margin-top: 3rem;
    h2 {
      font-weight: 400;
      text-transform: uppercase;
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 3rem;
  button {
    background: white;
    color: red;
  }

  button:disabled {
    background: black;
  }
`;
