/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LandingPage from './components/home/landingPage';
import ProtectedRoutes from './components/protectedRoutes';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Index from './components';
import CarDetails from './components/CarDetails';
import ReservedContainer from './components/ReservationContainer';
import { logUserIn } from './features/users/userSlice';
import SplashScreen from './components/SplashScreen';
import ReserveForm from './components/ReservedItem';
import ReservationContainer from './components/ReservationContainer';

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const { pathname } = useLocation();
  // const navigate = useNavigate();

  const setUser = async (token) => {
    const user = await authenticateUser(token);
    dispatch(logUserIn(user));
    navigate(`${pathname}`);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setUser(token);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={isLoggedIn ? <Index /> : <LandingPage />} />
        {/* <Route path='/' element={<LandingPage />} /> */}
        <Route exact path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/car-list' element={<Index />} /> */}
        <Route path='/reserveform' element={<ReserveForm />} />
        <Route path='reservation' element={<ReservationContainer />} />
      </Routes>
    </Router>
  );
}
export default App;
