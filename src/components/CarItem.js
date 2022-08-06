/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/car/carSlice';
import '../app.css';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  return (
    <article className='car-item hover:opacity-60 m-4 bg-gray-400'>
      <div className='bg-[#9FBD3B]/100 w-52 h-52 rounded-full mx-auto relative mb-10'>
        <div className='absolute -left-3/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-[130%]'>
          <Link to={`/${car.id}`}>
            <img src={car.picture} alt={car.name} />
          </Link>
        </div>
      </div>
      <div className='max-w-[240px] mx-auto'>
        {/* <h4>{car.id}</h4> */}
        <h2 className='font-bold text-2xl uppercase mb-4 text-gray-700'>
          <span className='block'>{car.name}</span>
        </h2>
        <p className='text-sm text-gray-400 text-center'>
          {car.description.substring(0, 50)}
        </p>
        <h4 className='item-price'>${car.price}</h4>
        <button
          className='remove-btn'
          type='button'
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
