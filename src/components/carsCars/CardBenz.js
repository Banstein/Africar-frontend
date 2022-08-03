import React from 'react';
import Car from '../../assets/benz.png';

function CardBenz() {
  return (
    <div>
      <div className="overflow-hidden rounded shadow-lg my-card">
        <img src={Car} className="w-full" alt="car" />
        <div className="px-4 py-2">
          <div className="mb-1 text-sm font-bold">Mercedes benz new modal</div>
          <span className="text-sm text-gray-700">
            Mercedes benz, Prestige You can choose from a wide range of luxury
            vehicles made by legendary manufacturers!
          </span>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            Views
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            Details
          </span>
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            Book
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardBenz;
