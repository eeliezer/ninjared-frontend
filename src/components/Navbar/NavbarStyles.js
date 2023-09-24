import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
  height: 125px;
  background-color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  padding: 1rem 4rem;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  @media (max-width: 803px) {
    height: 300px;
    background-color: rgb(255, 255, 255);
    display: flex;
    padding: 1rem 4rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    text-transform: uppercase;
    width: 100%;
    flex-direction: column;
  }

  @media (max-width: 769px) {
    height: 300px;
    background-color: rgb(255, 255, 255);
    display: flex;
    padding: 1rem 4rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    text-transform: uppercase;
    width: 100%;
    flex-direction: column;
  }
`;

export const LogoImg = styled.img`
  width: 300px;
  height: auto;

  @media (max-width: 1099px) {
    width: 200px;
  }

  @media (max-width: 996px) {
    width: 150px;
  }
  @media (max-width: 803px) {
    width: 300px;
  }
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    background: var(--button-bg-white);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 481px) {
    color: white;
    display: flex;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#ED1703' : '#ED1703')};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  gap: 5px;
`;

export const CartContainerDiv = styled.div`
  display: flex;
  margin-right: 25px;
  span {
    color: var(--button-bg-red);
  }
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 15px;
  span {
    position: absolute;
    top: -10px;
    left: 12px;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.9rem;
  }
`;

export const UserNavStyled = styled.div`
  cursor: pointer;
  span {
    color: var(--button-bg-red);
    font-size: 1rem;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const NavbarBuscador = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: var(--button-bg-red);
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 1.4rem;
    }

    @media (max-width: 481px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        color: var(--button-bg-red);
        font-size: 1rem;
        margin-top: 5%;
      }
    }
  }
`;

export const NavbarFormStyled = styled.form`
  display: flex;
  button {
    background: var(--button-bg-red);
    color: #ffffff;
    font-weight: 600;
  }
  @media (max-width: 481px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 270px;

    button {
      padding: 0.5rem 0.3rem;
      outline: none;
      border: none;
      border-radius: 5px;
      background: var(--button-bg-red);
      color: white;
      font-family: Quantico, sans-serif;
      text-transform: uppercase;
      font-weight: 400;
      cursor: pointer;
    }
  }
`;

export const NavbarSearchBarStyled = styled.input`
  background-color: var(--button-bg-red);
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  width: 250px;
  color: white;
  font-weight: 600;
  font-family: Quantico, sans-serif;

  @media (max-width: 1020px) {
    width: 200px;
  }

  @media (max-width: 481px) {
    background-color: var(--button-bg-red);
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    width: 170px;
    color: white;
    font-weight: 600;
    font-family: Quantico, sans-serif;
  }
`;

export const IconWrapperStyled = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  position: relative;
  left: -2rem;
  top: 0.5rem;

  @media (max-width: 481px) {
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    position: relative;
    left: -1.8rem;
    top: 0rem;
  }
`;

export const HeroBtnStyled = styled.input`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
`;
