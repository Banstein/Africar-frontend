import CarItem from './CarItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';

const CarContainer = () => {
  const dispatch = useDispatch();
  const { carItems } = useSelector((store) => store.car);
  return (
    <section className='car'>
      <header>
        <h2>Cars List</h2>
      </header>
      <div>
        {carItems.map((item) => {
          return <CarItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='car-total'>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
          RESERVATIONS
        </button>
      </footer>
    </section>
  );
};
export default CarContainer;
