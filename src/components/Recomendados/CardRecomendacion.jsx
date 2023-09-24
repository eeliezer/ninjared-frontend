import React from 'react';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from './CardsRecomendacionStyled';
import { addToCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CardRecomendacion = ({ title, img, price, desc, id }) => {
  const dispatch = useDispatch();

  // Función que compara si el largo del string original es igual al string limitado a 35 caracteres
  // si el valor es igual muestra el valor normal, si es mayor entonces colocará puntos suspensivos para limitar el titulo
  // y evitar que se agregen demasiados caracteres que podrían abarcar mucho espacio innecesario
  const suspensivesTitle = title => {
    const trimSize = 35;
    const textTitle = title;
    const content = textTitle.substring(0, textTitle.length);
    const trimmedText = content.substring(0, trimSize);
    if (trimmedText.length === title.length) {
      return trimmedText;
    }
    return trimmedText + '...';
  };

  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{suspensivesTitle(title)} </CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button
        onClick={() => dispatch(addToCart({ img, title, desc, price, id }))}
      >
        Agregar
      </Button>
    </Card>
  );
};

export default CardRecomendacion;
