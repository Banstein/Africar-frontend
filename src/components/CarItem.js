/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/car/carSlice';
import '../app.css';

const CarItem = ({
  id, picture, name, price, description,
}) => {
  const dispatch = useDispatch();
  return (
    <article className="flex w-full car-item">
      <img src={picture} alt={name} />
      <div className='mr-6 bg-red-200 car-title'>
        <h4>{name}</h4>
        <p>{description}</p>
        <h4 className="item-price">
          $
          {price}
        </h4>
        <button
          type="buttton"
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
    </article>
  );
};
export default CarItem;
