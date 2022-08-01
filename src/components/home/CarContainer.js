import React from 'react';
import { useSelector } from 'react-redux';
import CarItem from '../carlist/CarItem';
function CarContainer() {
  const { carItems } = useSelector((store) => store.car);
  return (
    <main>
      <div>
        {carItems.map((item) => {
          return <CarItem key={item.id} {...item} />;
        })}
      </div>
    </main>
  );
}

export default CarContainer;
