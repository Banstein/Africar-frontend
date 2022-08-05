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
    setCar(data);
  };
  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <article key={car.id}>
      <div>{car.id}</div>
      <div>{car.price}</div>
      <div>{car.name}</div>
      <div>{car.description}</div>
      <div>{car.picture}</div>
    </article>
  );
};

export default CarDetails;
