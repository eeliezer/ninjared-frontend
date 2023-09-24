import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import CartIcon from './CartIcon/CartIcon';
import Button from '../UI/Button/Button';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  LogoImg,
  NavbarBuscador,
  CartContainerDiv,
  NavbarFormStyled,
  NavbarSearchBarStyled,
  IconWrapperStyled,
} from './NavbarStyles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenMenu } from '../../redux/user/userSlice';
import { selectCategory } from '../../redux/categories/categoriesSlice';

const Navbar = ({ doScroll }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  const listOfCategories = useSelector(
    state => state.categories.categories
  ).map(category => category.category);

  const handlerSubmit = (e, value) => {
    e.preventDefault();

    const newCategory = value.trim().toLowerCase().split(' ').join('');

    const selectedCategory = listOfCategories.find(category =>
      category.toLowerCase().includes(newCategory)
    );

    if (selectedCategory) {
      dispatch(selectCategory(selectedCategory));
      doScroll();
    } else {
      return alert('Categorías no encontrada');
    }

    setValue('');
  };

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <div>
        <Link to='/'>
          <LogoImg
            src='https://res.cloudinary.com/divurmndi/image/upload/v1684022704/red-ninja-collections-high-resolution-logo-white-on-transparent-background_en_rojo_wicens.png'
            alt='Logo'
          />
        </Link>
      </div>
      <NavbarBuscador>
        <h1 className='title'>¿Qué categoría buscas?</h1>
        <NavbarFormStyled>
          <NavbarSearchBarStyled
            value={value}
            onChange={e => setValue(e.target.value)}
            type='text'
            placeholder='Star Wars...'
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button
            onClick={e => handlerSubmit(e, value)}
            radius='10'
            disabled={!value}
          >
            Buscar
          </Button>
        </NavbarFormStyled>
      </NavbarBuscador>
      <LinksContainerStyled>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Link to='/'>
            <LinkContainerStyled home>
              <HiHome />
            </LinkContainerStyled>
            Home
          </Link>
        </motion.div>
        <motion.div whileTap={{ scale: 0.95 }}>
          <CartContainerDiv>
            <CartNavStyled>
              <CartIcon />
            </CartNavStyled>
          </CartContainerDiv>
        </motion.div>
        <motion.div whileTap={{ scale: 0.95 }}>
          <UserNavStyled>
            <UserContainerStyled
              onClick={() =>
                currentUser ? dispatch(toggleHiddenMenu()) : navigate('/login')
              }
            >
              <SpanStyled>
                {currentUser ? `${currentUser.nombre}` : 'Inicia sesión'}
              </SpanStyled>
              <FaUserAlt />
            </UserContainerStyled>
          </UserNavStyled>
        </motion.div>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
