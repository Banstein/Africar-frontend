/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Car from '../../assets/audi.png';

function Cards() {
  return (
    <div>
      <div className='overflow-hidden rounded shadow-lg my-card'>
        <img src={Car} className='w-full' />
        <div className='px-4 py-2'>
          <div className='mb-1 text-sm font-bold'>Audi 4X4</div>
          <span className='text-sm text-gray-700'>
            City car. These range from compact and fuel-efficient city to
            eco-friendly model. Available in store with discount!
          </span>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
            Views
          </span>
          <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
            Details
          </span>
          <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
            Book
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
