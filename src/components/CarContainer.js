import { useDispatch, useSelector } from 'react-redux';
import CarItem from './CarItem';
import { openModal } from '../features/modal/modalSlice';

const CarContainer = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { carItems, total, amount } = useSelector((store) => store.car);

  if (amount < 1) {
    return (
      <section className="car">
        <header>
          <h2>Cars List</h2>
          <h4 className="empty-car">No Cars Available yet</h4>
        </header>
      </section>
    );
  }

=======
  const { carItems } = useSelector((store) => store.car);
>>>>>>> 627a70827361a847c2e6a3fe6e43faaa95ae2018
  return (
    <section className="car">
      <header>
        <h2>Cars List</h2>
      </header>
      <div>
        {carItems.map((item) => <CarItem key={item.id} {...item} />)}
      </div>
      <footer>
        <hr />
<<<<<<< HEAD
        <div className="car-total">
          <h4>
            total
            {' '}
            <span>
              $
              {total.toFixed(2)}
            </span>
          </h4>
=======
        <div className='car-total'>
>>>>>>> 627a70827361a847c2e6a3fe6e43faaa95ae2018
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          RESERVATIONS
        </button>
      </footer>
    </section>
  );
};
export default CarContainer;
