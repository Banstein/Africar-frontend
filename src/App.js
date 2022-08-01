import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/home/landingPage';
// import CarContainer from './components/home/CarContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
