import { CarIcon } from '../components/icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((store) => store.car);
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>Africar</h3>
          <div className='nav-container'>
            <CarIcon />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
