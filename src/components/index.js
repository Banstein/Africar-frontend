import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import CarContainer from './CarContainer';
import { getCarItems } from '../features/car/carSlice';
import Modal from './Modal';
import 'react-toastify/dist/ReactToastify.css';

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
        <ToastContainer />
        <CarContainer />
      </main>
    </div>
  );
}
export default App;
