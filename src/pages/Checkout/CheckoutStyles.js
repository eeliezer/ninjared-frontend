import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  padding: 2rem 2rem;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 769px) {
    display: flex;
    -webkit-box-pack: justify;
    padding: 2rem;
    -webkit-box-align: center;
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (max-width: 481px) {
    display: flex;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    text-align: center;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    padding: 2rem;
  }
`;
