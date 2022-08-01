import React from 'react'
import { car } from '../../assets/CarData';
function CarContainer() {
  return (
    <main>
      <div>
        {car.name}
      </div>
    </main>
  )
};

export default CarContainer;