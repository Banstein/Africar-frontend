import React from 'react';
import carItem from '../carlist/carItem';
import { useSelector } from 'react-redux';
function CarContainer() {
  const { carCards } = useSelector((store) => store.car);
  return (
    <main>
      <div>
        {carItem.map((item) => {
          return <carItem key={item.id} {...item} />;
        })}
      </div>
    </main>
  )
};

export default CarContainer;