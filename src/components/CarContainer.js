import { useDispatch, useSelector } from 'react-redux';
import CarItem from './CarItem';
import { openModal } from '../features/modal/modalSlice';

const CarContainer = () => {
  const dispatch = useDispatch();
  const { carItems } = useSelector((store) => store.car);
  return (
    <section className="car">
      <header>
        <h2>Cars List</h2>
      </header>
      <div>
        {carItems.map((item) => <CarItem key={item.id} car={item} />)}
      </div>
      <footer>
        <hr />
        <div className="car-total" />
        <button type="button" className="btn clear-btn" onClick={() => dispatch(openModal())}>
          RESERVATIONS
        </button>
      </footer>
    </section>
  );
};
export default CarContainer;
