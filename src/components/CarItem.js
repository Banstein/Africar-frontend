/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/car/carSlice';

const CarItem = ({ id, picture, name, price, description }) => {
  const dispatch = useDispatch();
  return (
    <article className='car-item'>
      <img src={picture} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
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
