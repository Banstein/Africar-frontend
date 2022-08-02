import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import CarContainer from './CarContainer';

import { calculateTotals, getCarItems } from '../features/car/carSlice';
import Modal from './Modal';

function Index() {
  const { carItems, isLoading } = useSelector((store) => store.car);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [carItems]);

  useEffect(() => {
    dispatch(getCarItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <main>
        {isOpen && <Modal />}
        {/* <Navbar /> */}
        <CarContainer />
      </main>
    </div>
  );
}

export default Index;
