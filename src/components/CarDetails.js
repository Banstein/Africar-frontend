/* eslint-disable react/prop-types */
// import { useDispatch } from 'react-redux';
// import { getCarItems } from '../features/car/carSlice';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [car, setCar] = useState({});
  const fetchCar = async () => {
    const res = await fetch(`https://africar-premium.herokuapp.com/api/v1/cars/${id}`);
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
      <Link to="/reserveform">
        <button type='button'>Reserve your car now</button>
      </Link>
    </article>
  );
};

export default CarDetails;
