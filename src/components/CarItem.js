/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/car/carSlice';
import '../app.css';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  return (
    <article className="car-item">
      <Link to={`/cars/${car.id}`}>
        <img src={car.picture} alt={car.name} />
      </Link>
      <div>
        <h4>{car.name}</h4>
        <p>{car.description}</p>
        <h4 className="item-price">
          $
          {car.price}
        </h4>
        <button
          className="remove-btn"
          type="button"
          onClick={() => {
            dispatch(removeItem(car.id));
          }}
        >
          remove
        </button>
      </div>
    </article>
  );
};

export default CarItem;
