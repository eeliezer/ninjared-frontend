import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';

import {
  MisOrdenesBtnContainerStyled,
  MisOrdenesContainerStyled,
  MisOrdenesTitleStyled,
} from './MisOrdenesStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFailure } from '../../redux/orders/ordersSlice';

const MisOrdenes = () => {
  const navigate = useNavigate();
  const { orders, error } = useSelector(state => state.orders);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser);
    }

    if (!currentUser?.token) {
      dispatch(fetchOrdersFailure());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, orders, currentUser, error]);

  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>MIS ÓRDENES</MisOrdenesTitleStyled>
        <CardsMisOrdenes />
        <MisOrdenesBtnContainerStyled>
          <Button onClick={() => navigate('/')}>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
    </>
  );
};

export default MisOrdenes;
