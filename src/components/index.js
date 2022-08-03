import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './Navbar';
import CarContainer from './CarContainer';
import { getCarItems } from '../features/car/carSlice';
import Modal from './Modal';

function App() {
  const { isLoading } = useSelector((store) => store.car);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <main>
        {isOpen && <Modal />}
        {/* <Navbar /> */}
        <CarContainer />
      </main>
    </div>
  );
}
export default App;
