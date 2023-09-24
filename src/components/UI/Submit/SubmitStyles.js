import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  font-size: 0.9rem;
  border-radius: 5px;
  background: var(--button-bg-white);
  color: var(--button-bg-red);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  font-family: 'Quantico', sans-serif;
  margin: 0;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  :hover {
    transition: all 0.25s ease-out;
  }
  :active {
    scale: 0.95;
  }
`;
