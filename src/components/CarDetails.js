import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
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
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-white-200 py-10 px-15">
      <div key={car.id} >
        <div className="flex  justify-center  w-full">
          <h1 className="font-semibold text-2xl">
            {' '}
            <span>
              {' '}
              {car.name}
            </span>
            <br />
            <span>
              {' '}
              {car.year}
            </span>
            {' '}
          </h1>
        </div>

        <div className="flex flex-col  gap-[1%] items-center md:flex-row md:gap-[2%] md:items-center">
          <div className="w-100 h-100 mx-auto relative mb-4 flex justify-center items-center content-center  ">
            <div className="flex justify-center items-center content-center " >
              <img className="w-[100%] h-[100%] md:w-[100%] md:h-[100%]" src={car.picture} alt="img" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="w-[90%] ">
              {' '}
              {car.description }
              {' '}
            </p>
            <div className="w-[90%] ">
              <p>
                Price:
                {car.price}
              </p>
            </div>
            <div>
              <Link to="/reserveform">
                <button type="button" className="bg-green-500    hover:bg-green-800/80 text-white font-bold py-2 px-4 rounded w-52">
                Reserve your car now
                </button>
              </Link>
            </div>
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
