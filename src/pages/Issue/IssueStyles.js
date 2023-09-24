import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const ValidateContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  height: 65vh;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 40px;

  input {
    -webkit-text-fill-color: black;
  }
`;

export const IssueInput = styled.div`
  height: 500px;
`;

export const TittleIssue = styled.h1`
  color: white;
`;
