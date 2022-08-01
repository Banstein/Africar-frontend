import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/home/landingPage';
import Login from './components/login/Login';
import Reservations from './components/reservations/Reservations';
import Signup from './components/signup/Signup';
import Navbar from './components/Navbar';
import CarContainer from './components/CarContainer';

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCarItems } from './features/car/carSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';
function App() {
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
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/reservation' element={<Reservations />}></Route>
      </Routes>
    </Router>
    // <main>
    //   {isOpen && <Modal />}
    //   <Navbar />
    //   <CarContainer />
    // </main>
  );
}
export default App;
