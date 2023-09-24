import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  background: var(--button-bg-red);
  color: white;
  font-family: 'Quantico', sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    opacity: 95%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    background: var(--gray-bg-disabled);
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background: #212121;
      & span {
        background: var(--gray-bg-disabled);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    `}
`;
