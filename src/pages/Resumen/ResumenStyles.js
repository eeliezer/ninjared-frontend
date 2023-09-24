import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ResumenContainerStyled = styled.div`
  padding: 2rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 481px) {
    padding: 2rem 7rem;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

export const ResumenTitleStyled = styled.div`
  color: var(--button-bg-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;

  @media (max-width: 721px) {
    h1 {
    }

    h2 {
    }
  }

  @media (max-width: 481px) {
    color: var(--button-bg-white);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 2%;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background: var(--button-bg-white);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;
    background: var(--button-bg-white);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
`;

export const ResumenContainerInfoStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  color: var(--button-bg-white);
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 721px) {
    width: 420px;
  }

  @media (max-width: 481px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    color: var(--button-bg-white);
    margin-top: 25%;
    margin-bottom: 25%;
    text-transform: uppercase;
  }
`;

export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
`;

export const HrEstilado = styled.hr`
  margin: 1rem 0;
  color: white;
  border: 0;
  border-top: 0.15rem solid;
  opacity: 1;
`;
