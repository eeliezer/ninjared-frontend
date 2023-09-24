import React from 'react';

import { BorderDecoration, CardCategoria } from './CategoriasStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../redux/categories/categoriesSlice';

export const Categoria = ({ img, title, category }) => {
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectCategory(category));
  };

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
