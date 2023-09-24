import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoriasContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  user-select: none;
  flex-wrap: wrap;

  @media (max-width: 803px) {
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
    user-select: none;
    flex-wrap: wrap;
    flex-direction: row;
  }

  @media (max-width: 769px) {
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;
    user-select: none;
    flex-wrap: wrap;
  }
  @media (max-width: 481px) {
    display: flex;
    -webkit-box-align: center;
    user-select: none;
    flex-direction: row;
    justify-content: center;
    gap: 5%;
    align-items: center;
  }
`;

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 190px;
  padding: 1rem 2rem;
  color: ${({ selected }) =>
    selected ? 'var(--background-card-white)' : 'var(--button-bg-red)'};
  background-color: ${({ selected }) =>
    selected ? 'var(--gray-bg-disabled)' : 'var(--button-bg-white)'};
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  h2 {
    font-size: 0.9rem;
    display: none;
  }

  img {
    width: auto;
    height: 50px;
  }

  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }

  @media (max-width: 1281px) {
    width: 150px;
    h2 {
      display: none;
    }
  }

  @media (max-width: 481px) {
    display: flex;
    -webkit-box-pack: center;
    width: 65px;
    color: var(--button-bg-red);
    border-radius: 5px;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 1rem;
    h2 {
      display: none;
    }

    img {
      width: auto;
      height: 20px;
    }

    :first-child {
      img {
        padding-top: 0px;
        padding-bottom: 0px;
      }
    }
  }
`;

export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: var(--gray-bg-disabled);
  border-radius: 15px;

  @media (max-width: 481px) {
    display: none;
  }
`;
