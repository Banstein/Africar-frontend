/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/home/landingPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Index from './components';
import CarDetails from './components/CarDetails';
import ReservedContainer from './components/ReservationContainer';
import ReserveForm from './components/AddReservation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cars' element={<Index />} />
        <Route path='/cars/:id' element={<CarDetails />} />
        <Route path='/reservation' element={<ReservedContainer />} />
        <Route path='/reserveform' element={<ReserveForm />} />
      </Routes>
    </Router>
  );
}
export default App;
