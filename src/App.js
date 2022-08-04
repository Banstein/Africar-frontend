/* eslint-disable jsx-quotes */
import React, {useEffect} from 'react';
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
import ReservedContainer from './components/ReservationContainer';
import { logUserIn } from './features/users/userSlice';
import SplashScreen from './components/SplashScreen';


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
        <Route path='/' element={isLoggedIn ? <Index /> : <SplashScreen />} />
        {/* <Route path='/' element={<LandingPage />} /> */}
        <Route exact path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/car-list' element={<Index />} /> */}
        <Route path='/reservation' element={<ReservedContainer />} />
      </Routes>
    </Router>
  );
}
export default App;
