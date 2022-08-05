import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CarouselItem = ({ car }) => {
  const { id, make, model, image, description } = car;

  return (
    <Link to={`/cardetails`}>
      <div className='hover:opacity-60'>
        <div className='relative mx-auto mb-10 rounded-full bg-amber-500 w-52 h-52'>
          <div className='absolute -left-3/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-[130%]'>
            <img src={image} alt='car' />
          </div>
        </div>
        <div className='max-w-[240px] mx-auto'>
          <h2 className='mb-4 text-2xl font-bold uppercase'>
            <span className='block'>{make}</span>
            <span>{model}</span>
          </h2>
          <p className='text-sm text-gray-400'>
            {`${description.slice(0, 100)}...`}
          </p>
        </div>
      </div>
    </Link>
  );
};

CarouselItem.propTypes = {
  car: PropTypes.objectOf().isRequired,
};

export default CarouselItem;
