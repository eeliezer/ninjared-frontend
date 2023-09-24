import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ForgotContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 5%;
  height: calc(100vh - 400px);
  text-transform: uppercase;

  input {
    -webkit-text-fill-color: black;
  }

  h1 {
    color: var(--button-bg-white);
  }

  h2 {
    color: var(--button-bg-white);
  }

  @media (max-width: 803px) {
    height: calc(88vh - 400px);
  }

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
    height: calc(140vh - 400px);
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
`;

export const ForgotEmailStyled = styled.p`
  color: var(--button-bg-red);
  cursor: pointer;
  background: var(--button-bg-white);
  border-radius: 5px;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  text-transform: uppercase;
  :hover {
    transition: all 0.25s ease-out;
  }
  :active {
    scale: 0.95;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  margin-top: 2%;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;
