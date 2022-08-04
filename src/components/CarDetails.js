/* eslint-disable react/prop-types */
// import { useDispatch } from 'react-redux';
// import { getCarItems } from '../features/car/carSlice';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState({});
  const fetchCar = async () => {
    const res = await fetch(`http://localhost:3000/api/v1/cars/${carId}`);
    const data = await res.json();
    console.log(data);
    setCar(data);
  };
  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <>
      <div>{car.id}</div>
      <div>{car.price}</div>
      <div>{car.name}</div>
      <div>{car.description}</div>
      <div>{car.picture}</div>
    </>
  );
};

export default CarDetails;
