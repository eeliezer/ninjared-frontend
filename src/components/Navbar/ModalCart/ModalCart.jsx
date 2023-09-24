import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../../utils';

import Submit from '../../UI/Submit/Submit';
import Increase from '../../UI/Increase/Increase';
import ModalCartCard from './ModalCartCard';

import {
  ButtonContainerStyled,
  MainContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
  ContenedorClearCart,
} from './ModalCartStyles';
import { ModalOverlayStyled } from '../NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';

const ModalCart = () => {
  const navigate = useNavigate();
  const { cartItems, shippingCost } = useSelector(state => state.cart);
  const { currentUser } = useSelector(state => state.user);
  const hiddenCart = useSelector(state => state.cart.hidden);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => dispatch(toggleHiddenCart())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'spring', damping: 27 }}
            key='cart-modal'
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className='close__modal '
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenCart())}
              >
                <MdOutlineClose size='24px' />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <ContenedorClearCart>
                  <span
                    onClick={() => dispatch(clearCart())}
                    disabled={!cartItems.length}
                  >
                    Vaciar carrito
                  </span>
                  <Increase
                    onClick={() => dispatch(clearCart())}
                    disabled={!cartItems.length}
                  >
                    <IoMdTrash />
                  </Increase>
                </ContenedorClearCart>
              </TitleStyled>

              <ProductsWrapperStyled>
                {cartItems.length ? (
                  cartItems.map(item => (
                    <ModalCartCard key={item.id} {...item} />
                  ))
                ) : (
                  <p> Agrega articulos en el carrito </p>
                )}
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(totalPrice)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(shippingCost)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>
                  {formatPrice(totalPrice + shippingCost)}
                </PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit
                  onClick={() => {
                    if (currentUser === null) {
                      navigate('/login');
                      dispatch(toggleHiddenCart());
                    } else if (currentUser.verified === true) {
                      navigate('/checkout');
                      dispatch(toggleHiddenCart());
                    } else {
                      navigate('/validate');
                      dispatch(toggleHiddenCart());
                    }
                  }}
                  disabled={!cartItems.length}
                >
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
