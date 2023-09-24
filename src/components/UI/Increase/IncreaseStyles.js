import styled from 'styled-components';
import { motion } from 'framer-motion';

export const IncreaseStyled = styled(motion.button)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  width: 20px;
  height: 20px;
  background: ${({ bgColor }) => bgColor || 'var(--button-bg-white)'};
  border: none;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--button-bg-red);
  cursor: pointer;
  font-family: Quantico, sans-serif;
  flex-direction: column;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
