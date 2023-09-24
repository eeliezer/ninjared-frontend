import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModelUserStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentUser,
  toggleHiddenMenu,
} from '../../../redux/user/userSlice';
import { ADMIN } from '../../../utils/constants';

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector(state => state.user);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key='cart-user'
        >
          <UsernameStyled>{`¡Hola ${currentUser.nombre}!`}</UsernameStyled>
          <motion.div whileTap={{ scale: 0.97 }}>
            {currentUser?.verified === false ? (
              <Link to='/validate'>¡VALIDA TU CUENTA AQUÍ!</Link>
            ) : (
              <span>¡TU CUENTA ESTÁ VERIFICADA!</span>
            )}
          </motion.div>
          <motion.div whileTap={{ scale: 0.97 }}>
            {currentUser?.rol === ADMIN ? (
              <Link to='/issue'>
                <HrStyled /> CREAR REPORTE <HrStyled />
              </Link>
            ) : (
              <>
                <HrStyled />
              </>
            )}
          </motion.div>

          <LinkStyled to='/mis-ordenes'>Mis Compras</LinkStyled>
          <HrStyled />
          <span
            onClick={() => {
              dispatch(setCurrentUser(null));
              dispatch(toggleHiddenMenu());
            }}
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
