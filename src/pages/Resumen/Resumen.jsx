import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../utils';

import CardResumen from '../../components/Resumen/CardResumen';
import Link from '../../components/UI/Link/Link';

import {
  CostoEnvioStyled,
  CostoProductoStyled,
  CostoTotalStyled,
  ProductsContainerStyled,
  ResumenContainerInfoStyled,
  ResumenContainerStyled,
  ResumenTitleStyled,
  HrEstilado,
} from './ResumenStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders } from '../../axios/axios-orders';

const Resumen = () => {
  const [visitedOrder, setVisitedOrder] = useState(null);
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const { orderId } = useParams();

  useEffect(() => {
    console.log(orders);
    console.log(orders?.find(order => order._id === orderId));
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    setVisitedOrder(orders?.find(order => order._id === orderId));
  }, [dispatch, orders, currentUser, orderId]);

  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>RESUMEN ORDEN: #{visitedOrder?._id.slice(0, 7)}</h1>
        <h2>PRODUCTOS:</h2>
      </ResumenTitleStyled>
      <ProductsContainerStyled>
        {visitedOrder?.items.map(product => (
          <CardResumen key={product._id} {...product} />
        ))}
        {/* <CardResumen /> */}
      </ProductsContainerStyled>
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span>{formatPrice(visitedOrder?.price)}</span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span>{formatPrice(visitedOrder?.shippingCost)}</span>
        </CostoEnvioStyled>
        <HrEstilado />
        <CostoTotalStyled>
          <p>Total</p>
          <span>{formatPrice(visitedOrder?.total)}</span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
      <Link borderRadius='20' to='/mis-ordenes'></Link>
    </ResumenContainerStyled>
  );
};

export default Resumen;
