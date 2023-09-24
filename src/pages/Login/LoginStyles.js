import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: 'Quantico', sans-serif;
  color: #fff;
  height: 40vh;
  text-transform: uppercase;
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 481px) {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 20px;
    margin-top: 5%;
    margin-bottom: 5%;
    font-family: Quantico, sans-serif;
    color: rgb(255, 255, 255);
    height: 110vh;
    h1 {
      text-transform: uppercase;
    }
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  p {
    color: #fff;
  }

  button {
    background: #fff;
    color: var(--button-bg-red);
    font-weight: 600;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 0px;
  }

  @media (max-width: 481px) {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 2rem;
    gap: 20px;

    p {
      text-align: center;
      text-transform: uppercase;
    }
  }
`;

export const LoginPasswordStyled = styled.p`
  margin: 0;
  color: var(--button-bg-white);
  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }

  @media (max-width: 481px) {
    text-align: center;
    text-transform: uppercase;
  }
`;

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-bottom: 2%;
  input {
    padding: 1rem 2rem;
    border-radius: 5px;
    padding: 0.8rem 2rem;
    -webkit-text-fill-color: black;
  }

  @media (max-width: 803px) {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 35px;
    margin-bottom: 2%;
  }

  @media (max-width: 481px) {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    gap: 35px;
  }
`;

export const LoginButtonGoogleStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  background: var(--button-bg-white);
  color: #000;
  cursor: pointer;
`;

export const LoginEmailStyled = styled.p`
  color: var(--button-bg-white);

  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }

  @media (max-width: 481px) {
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Submit = styled.button`
  background: --button-bg-white;
  border-radius: 5px;
`;
