/* eslint-disable jsx-quotes */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import CarItem from './CarItem';
import { getCarItems } from '../features/car/carSlice';
import '../app.css';

const ItemSingleCar = () => {
  const { carItems } = useSelector((store) => store.car);

  return (
    <>
      <div className='car-header hidden md:block'>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          className=' '
        >
          {carItems.map((item) => (
            <CarItem key={item.id} car={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default ItemSingleCar;

// export const CarouselDesktop = () => {
//   const dispatch = useDispatch();
//   const { carItems } = useSelector((store) => store.car);

//   useEffect(() => {
//     if (carItems.length > 0) dispatch(getCarItems());
//   }, []);

//   return (
//     <section className='py-10 hidden md:block'>
//       <Carousel
//         showThumbs={false}
//         showIndicators={false}
//         showStatus={false}
//         centerMode
//         centerSlidePercentage={45}
//       >
//         {cars.cars.map((car) => (
//           <carItem key={car.id} car={car} />
//         ))}
//       </Carousel>
//     </section>
//   );
// };

// const ItemSingleCar = () => {
//   <>
//     <SmallCarousel />
//     {/* <CarouselDesktop /> */}
//   </>;
// };

// export default ItemSingleCar;
