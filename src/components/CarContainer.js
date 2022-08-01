import CarItem from './CarItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const CarContainer = () => {
  const dispatch = useDispatch();
  const { carItems, total, amount } = useSelector((store) => store.car);

  if (amount < 1) {
    return (
      <section className='car'>
        <header>
          <h2>Reservation Form</h2>
          <h4 className='empty-car'>No reservation done yet</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='car'>
      <header>
        <h2>Reservation Form</h2>
      </header>
      <div>
        {carItems.map((item) => {
          return <CarItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='car-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
          RESERVATIONS
        </button>
      </footer>
    </section>
  );
};
export default CarContainer;