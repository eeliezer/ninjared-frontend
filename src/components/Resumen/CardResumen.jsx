import React from 'react';
import { formatPrice } from '../../utils';

import {
  ProductCenterStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
  ProductInfoTitle,
} from './CardResumenStyles';

const CardResumen = ({ title, desc, quantity, img, price }) => {
  return (
    <ProductStyled>
      <ProductCenterStyled>
        <img src={img} alt={title} />
        <ProductInfoTitle>
          <h3> {title} </h3>
          <p> {desc} </p>
        </ProductInfoTitle>
      </ProductCenterStyled>
      <PriceContainerStyled>
        <p> x{quantity}U </p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
