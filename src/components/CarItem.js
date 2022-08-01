/* eslint-disable react/prop-types */
import { ChevronDown, ChevronUp } from './icons';
import { removeItem, increase, decrease } from '../features/car/carSlice';
import { useDispatch } from 'react-redux';

const CarItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='car-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
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
