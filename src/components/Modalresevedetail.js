import { useDispatch } from 'react-redux';
import { clearCar } from '../features/car/carSlice';
import { closeModal } from '../reservations/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Are you sure you want to reserve a car?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCar());
              dispatch(closeModal());
            }}
          >
            YES
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            NO
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
