import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import ReservedContainer from './components/ReservationContainer';
import CarContainer from './components/CarContainer';
import { calculateTotals, getCarItems } from './features/car/carSlice';
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
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CarContainer />
      <ReservedContainer />
    </main>
  );
}
export default App;
