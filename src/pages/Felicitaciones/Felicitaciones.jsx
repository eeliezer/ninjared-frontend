import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

import {
  ContainerInfoStyled,
  TextStyled,
  TitleStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TextStyled>
        <img
          src='https://res.cloudinary.com/divurmndi/image/upload/v1688009191/red-check-mark-transparent-background-222_mr2ccb2_oflzvm.png'
          alt='Check Ok'
        />
        <ContainerInfoStyled>
          <TitleStyled>¡Felicitaciones!</TitleStyled>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Button onClick={() => navigate('/mis-ordenes')}>Volver</Button>
      </TextStyled>
    </div>
  );
};

export default Felicitaciones;
