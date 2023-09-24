import { useSelector } from 'react-redux';
import CardMisOrdenes from './CardMisOrdenes';
import { MisOrdenesContainerStyled, EmptyOrders } from './CardMisOrdenesStyles';
import Loader from '../UI/Loader/Loader';

const CardsMisOrdenes = () => {
  const { orders, loading, error } = useSelector(state => state.orders);

  if (loading) return <Loader styles={{ height: '100px', width: '100px' }} />;
  if (error) return <h2 style={{ textAlign: 'center' }}>{error}</h2>;

  return (
    <MisOrdenesContainerStyled>
      {orders?.length ? (
        orders.map(order => <CardMisOrdenes key={order._id} {...order} />)
      ) : (
        <EmptyOrders style={{ textAlign: 'center' }}>
          NO HAY ÓRDENES
        </EmptyOrders>
      )}
    </MisOrdenesContainerStyled>
  );
};

export default CardsMisOrdenes;
