import styled from 'styled-components';

export const CardsContainer = styled.div`
  grid-template-columns: ${({ gridLength }) => `repeat(${gridLength}, 1fr)`};
  height: 360px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  -moz-box-align: center;
  place-items: center;

  @media (max-width: 1281px) {
    height: 360px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 1rem;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    overflow: scroll;
    -moz-box-align: center;
    place-items: center;
  }

  @media (max-width: 803px) {
    height: 380px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 1rem;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    overflow: scroll;
    -moz-box-align: center;
    place-items: center;
  }

  @media (max-width: 769px) {
    height: 360px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 1rem;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    overflow: scroll;
    -webkit-box-align: center;
    place-items: center;
  }
  @media (max-width: 481px) {
    height: 380px;
    display: flex;
    gap: 20px;
    padding: 1rem;
    border-radius: 5px;
    overflow: scroll;
    -webkit-box-align: center;
    place-items: center;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  height: 330px;
  padding: 1rem 1.7rem;
  border: 1px solid rgba(33, 33, 33, 0.3);
  border-radius: 15px;
  flex-flow: column nowrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 481px) {
    display: flex;
    gap: 1rem;
    padding: 0;
    height: 350px;
    border: 1px solid rgba(33, 33, 33, 0.3);
    border-radius: 15px;
    flex-flow: column wrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    button {
      margin-bottom: 5%;
    }
  }
`;

export const CardImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;

  @media (max-width: 481px) {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-top: 5%;
  }
`;

export const CardText = styled.div`
  display: flex;
  gap: 5px;
  width: 220px;
  color: var(--button-bg-red);
  flex-direction: column;
  align-items: center;
  @media (max-width: 481px) {
    display: flex;
    gap: 5px;
    width: 220px;
    color: var(--button-bg-red);
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: 0.05rem;
  font-size: 1rem;
  @media (max-width: 481px) {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 1rem;
    text-align: center;
  }
`;

export const InfoCard = styled.p`
  margin: 0;
  color: var(--gray-bg-disabled);
  font-size: 0.8rem;
  @media (max-width: 481px) {
    margin: 0px;
    color: var(--gray-bg-disabled);
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  background: var(--button-bg-red);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 481px) {
    font-size: 1.3rem;
  }
`;
