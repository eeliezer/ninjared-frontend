import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  max-width: 1600px;
  height: 100%;
  background-color: var(--button-bg-red);
  min-height: calc(100vh - 500px);
  margin: 0 auto;
  padding: 2rem 0;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const MisOrdenesTitleStyled = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;
  color: var(--button-bg-white);
`;

export const MisOrdenesBtnContainerStyled = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: var(--button-bg-white);
    color: var(--button-bg-red);
  }
`;
