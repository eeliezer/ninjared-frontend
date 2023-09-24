import styled from 'styled-components';

export const InputBoxStyled = styled.div`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  @media (max-width: 481px) {
    width: 100%;
  }
`;

export const InputLabelStyled = styled.label`
  display: flex;
  margin: 1rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`;

export const InputStyled = styled.input`
  background-color: var(--button-bg-white);
  outline: none;
  border: ${({ isError }) => (isError ? '1px solid #212121 ' : 'none')};
  border-radius: 8px;
  height: 30px;
  padding: 0.5rem 1rem;
  color: black;
  width: 70%;
  margin-top: 1rem;
  font-family: 'Quantico', sans-serif;

  ::placeholder {
    opacity: 60%;
    color: black;
  }
  -webkit-text-fill-color: black;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px var(--button-bg-white) inset;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: var(--gray-bg-disabled);
  font-size: 14px;
`;
