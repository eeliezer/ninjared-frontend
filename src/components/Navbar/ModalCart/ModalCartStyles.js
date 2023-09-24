import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  width: 450px;
  height: calc(100vh - 0.5rem);
  padding: 2rem;
  background-color: var(--background-card-white);
  border-radius: 0 0 0 1rem;
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 769px) {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
    gap: 30px;
    width: 450px;
    height: calc(-0.5rem + 100vh);
    padding: 2rem;
    background-color: var(--background-card-white);
    border-radius: 0px 0px 0px 1rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 10px;
  }

  @media (max-width: 721px) {
    width: 600px;
    height: 1020px;
  }

  @media (max-width: 481px) {
    position: fixed;
    top: -28px;
    right: 0px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    gap: 30px;
    width: 320px;
    height: 480px;
    overflow: auto;
    background-color: var(--background-card-white);
    border-radius: 0px 0px 0px 1rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 25px 10px;
  }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: var(--button-bg-red);
  color: white;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  margin: 0px;
  color: rgb(33, 33, 33);
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  & h1 {
    margin-top: 2%;
  }
`;

export const MainContainerStyled = styled.div`
  height: 70%;
  @media (max-width: 769px) {
    height: 73%;
  }

  @media (max-width: 481px) {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 75%;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 210px;
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    align-items: center;
    gap: 25px;
    width: 100%;
    height: 75%;
    margin: 0px auto;
    padding: 1rem 1rem 1rem 0px;
    overflow: scroll;
  }

  @media (max-width: 481px) {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 25px;
    width: 110%;
    height: 70%;
    margin: 0px auto;
    padding: 1rem 1rem 1rem 0px;
    overflow: auto;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;
  background: var(--button-bg-red);
  font-weight: bold;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 5px;

  & img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    object-fit: cover;
    background: var(--button-bg-white);
  }

  @media (max-width: 481px) {
    display: flex;
    -webkit-box-pack: justify;
    width: 240px;
    background: var(--button-bg-red);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 2px;
    padding: 1rem;
    border-radius: 5px;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    height: 150px;
    img {
      width: 60px;
      height: auto;
      border-radius: 5px;
      object-fit: cover;
      background: var(--button-bg-white);
    }
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  gap: 5px;
  width: 190px;
  -webkit-box-align: center;
  color: rgb(33, 33, 33);
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 481px) {
    display: flex;
    width: 190px;
    color: rgb(33, 33, 33);
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
  }
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  font-size: 0.8rem;
  margin-bottom: 2px;
  font-weight: 600;
  color: #fff;

  @media (max-width: 481px) {
    margin: 0px 0px 2px;
    font-size: 0.6rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
  }
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #212121;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.3rem;
  color: black;
  text-decoration: underline;

  @media (max-width: 481px) {
    font-weight: 800;
    font-size: 1rem;
    color: black;
    text-decoration: underline;
    text-align: center;
  }
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  & p {
    text-align: center;
    margin-bottom: 0;
    color: #212121;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
  margin-top: 2%;
  button {
    background: var(--button-bg-red);
    color: var(--button-bg-white);
  }
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 481px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const ContenedorClearCart = styled.div`
  display: flex;
  cursor: pointer;
`;
