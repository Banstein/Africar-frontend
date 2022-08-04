/* eslint-disable jsx-quotes */
import React from 'react';
import { useSelector } from 'react-redux';
import CarItem from './CarItem';
// import { openModal } from '../features/modal/modalSlice';
import '../app.css';

function ItemSingleCar() {
  // const dispatch = useDispatch();
  const { carItems } = useSelector((store) => store.car);

  // if (amount < 1) {
  //   return (
  //     <section className='car'>
  //       <header>
  //         <h2>Cars List</h2>
  //         <h4 className='empty-car'>No Cars Available yet</h4>
  //       </header>
  //     </section>
  //   );
  return (
    <>
      <div className='car-header'>
        <div className='flex car-header'>
          {carItems.map((item) => (
            <CarItem key={item.id} car={item} />
          ))}
        </div>
      </div>
      {/* <footer>
          <hr />
          <div className='car-total'>
            <h4>
              total
              <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button
            className='btn clear-btn'
            onClick={() => dispatch(openModal())}
          >
            RESERVATIONS
          </button>
        </footer> */}
    </>
  );
}

export default ItemSingleCar;
