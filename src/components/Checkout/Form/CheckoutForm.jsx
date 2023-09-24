import React from 'react';

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import {
  CheckoutDatosStyled,
  Formik,
  Form,
  BotonCheckout,
} from './CheckoutFormStyles';
import { checkoutInitialValues } from '../../../formik/initialValues';
import { checkoutValidationSchema } from '../../../formik/validationSchema';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../axios/axios-orders';
import { clearCart } from '../../../redux/cart/cartSlice';
import Loader from '../../UI/Loader/Loader';

const CheckoutForm = ({ cartItems, price, shippingCost }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(state => state.user);

  return (
    <CheckoutDatosStyled>
      <h2>Ingresa tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={async values => {
          const orderData = {
            items: cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: { ...values },
          };
          // console.log('currentUser ==> ', currentUser);
          // console.log('orderData ==> ', orderData);
          try {
            await createOrder(orderData, dispatch, currentUser);
            navigate('/felicitaciones');
            dispatch(clearCart());
          } catch (error) {
            alert('error');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Input
              name='name'
              htmlFor='nombre'
              type='text'
              id='nombre'
              placeholder='Tu nombre'
            >
              Nombre
            </Input>
            <Input
              name='cellphone'
              htmlFor='celular'
              type='text'
              id='celular'
              placeholder='Tu celular'
            >
              Celular
            </Input>
            <Input
              name='location'
              htmlFor='localidad'
              type='text'
              id='localidad'
              placeholder='Tu localidad'
            >
              Localidad
            </Input>
            <Input
              name='address'
              htmlFor='direccion'
              type='text'
              id='dirección'
              placeholder='Tu dirección'
            >
              Dirección
            </Input>
            <BotonCheckout>
              <Submit disabled={!cartItems.length || isSubmitting}>
                {isSubmitting ? <Loader /> : 'Iniciar Pedido'}
              </Submit>
            </BotonCheckout>
          </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
