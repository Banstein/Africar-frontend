/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/home/landingPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Index from './components';
import ReservedContainer from './components/ReservationContainer';
import ReserveForm from './components/AddReservation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/car-list' element={<Index />} />
        <Route path='/reservation' element={<ReservedContainer />} />
        <Route path='/reserveform' element={<ReserveForm />} />
      </Routes>
    </Router>
  );
}
export default App;
