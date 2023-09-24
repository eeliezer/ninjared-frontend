import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  width: 50%;
  margin: 0 auto;
  color: var(--button-bg-white);
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 769px) {
    width: 100%;
    margin: 0px auto;
    color: var(--button-bg-white);
    text-transform: uppercase;
    display: flex;
    flex-flow: column wrap;
    -webkit-box-align: center;
    align-items: center;
  }

  @media (max-width: 481px) {
    width: 100%;
    margin-top: 20%;
    color: var(--button-bg-white);
    text-transform: uppercase;
    display: flex;
    flex-flow: column wrap;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (max-width: 769px) {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  @media (max-width: 481px) {
    display: flex;
    -webkit-box-pack: justify;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 721px) {
    display: flex;
    -webkit-box-pack: justify;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  @media (max-width: 481px) {
    input {
      display: flex;
      margin: 1rem 0px;
      flex-direction: column;
      -webkit-box-pack: start;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
    }
  }
`;

export const BotonCheckout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  @media (max-width: 481px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 10%;
  }
`;
