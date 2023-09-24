import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  padding: 1rem 0;
  @media (max-width: 769px) {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 0px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: 481px) {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 0px;
    flex-flow: row wrap;
    gap: 20px;
  }
`;

export const ProductosCard = styled.div`
  background: var(--background-card-white);
  width: 300px;
  height: 590px;
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 0;
    color: var(--button-bg-red);
    font-size: 1.4rem;
    text-align: center;
  }
  p {
    color: var(--gray-bg-disabled);
    font-size: 1.2rem;
    text-align: center;
  }

  @media (max-width: 481px) {
    background: var(--background-card-white);
    width: 300px;
    height: 400px;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    align-content: center;
    flex-flow: column wrap;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    font-size: 1rem;
    img {
      width: 50%;
      margin-bottom: 1rem;
    }
    h2 {
      text-transform: uppercase;
      font-size: 1rem !important;
      text-align: center;
      margin: 0px;
    }
    p {
      color: var(--gray-bg-disabled);
      font-size: 0.8rem;
      text-align: center;
      margin: 0;
    }
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media (max-width: 481px) {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
  }
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.75rem;
  background: var(--button-bg-red);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 481px) {
    font-size: 1.3rem;
  }
`;
