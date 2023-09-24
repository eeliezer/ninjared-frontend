import styled from 'styled-components';

export const FooterContainerStyled = styled.footer`
  position: static;
  width: 100%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--button-bg-white);
  padding: 7rem 0 2rem 0;
  p {
    color: var(--button-bg-red);
  }
  p span {
    font-weight: 800;
    color: var(--button-bg-red);
  }
  a:visited {
    color: var(--button-bg-red);
  }
`;

export const LinksContainerStyled = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 481px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    margin-left: -2rem;
  }
`;
