import React from 'react';
import Car from '../../assets/audi.png';

function Cards() {
  return (
    <div>
      <div className="my-card rounded overflow-hidden shadow-lg">
        <img src={Car} className="w-full" alt="car" />
        <div className="px-4 py-2">
          <div className="font-bold text-sm mb-1">Audi 4X4</div>
          <span className="text-gray-700 text-sm">
            City car. These range from compact and fuel-efficient city to
            eco-friendly model. Available in store with discount!
          </span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Views
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Details
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Book
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
