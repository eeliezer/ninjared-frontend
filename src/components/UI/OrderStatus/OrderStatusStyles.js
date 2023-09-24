import styled from 'styled-components';

export const StatusStyled = styled.span`
  text-align: center;
  position: absolute;
  width: 2.1rem;
  height: 2.3rem;
  top: 1rem;
  right: 1rem;
  border-radius: 0.3rem;
  padding: 0.3rem;
  font-family: 'Quantico', sans-serif;
`;

export const CheckStyled = styled(StatusStyled)`
  background: #18b000;
`;

export const PendingStyled = styled(StatusStyled)`
  background: #eeee00;
`;

export const CancelStyled = styled(StatusStyled)`
  background: #ee0000;
`;
