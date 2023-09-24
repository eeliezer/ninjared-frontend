import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { INITIAL_LIMIT } from '../../utils';


const CardsProductos = () => {
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  let products = useSelector(state => state.products.products);
  const totalProducts = useSelector(state => state.products.totalProducts);
  const selectedCategory = useSelector(state => state.categories.selectedCategory);

  if(selectedCategory) {
    products = products.filter(e => e.category === selectedCategory);
  }

  return (
    <>
      <ProductosContainer>
        { 
          products.map((prod, i) => {
            if(limit > i){
              return <CardProducto key={prod.id} { ...prod } />
            }
            return null;
          })
        }
      </ProductosContainer>

      {(!selectedCategory &&
        <ButtonContainerStyled>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={ INITIAL_LIMIT === limit }
          >
            <span>Ver menos</span>
          </Button>
          <Button 
            onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)} 
            disabled={ totalProducts <= limit }>
            Ver más
          </Button>
        </ButtonContainerStyled>
      )}
    </>
  );
};

export default CardsProductos;
