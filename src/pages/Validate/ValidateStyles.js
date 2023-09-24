import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ValidateContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 150px;
  height: 40vh;
  input {
    -webkit-text-fill-color: black;
    width: 330px;
  }
`;

export const TitleValidateStyled = styled.h1`
  color: white;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 70px;
`;

export const ValidateSubtittle = styled.h2`
  color: white;
`;
