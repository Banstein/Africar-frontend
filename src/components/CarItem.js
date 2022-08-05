/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/car/carSlice';
import '../app.css';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  return (
    <article className="w-full p-2 m-2 bg-gray-400 car-item">
      <Link to={`/cars/${car.id}`}>
        <img src={car.picture} alt={car.name} />
      </Link>
      <div>
        <h4>{car.id}</h4>
        <h4>{car.name}</h4>
        <p className='text-gray-700 '>{car.description.substring(0, 40)}</p>
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
