import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import ReservedItem from './ReservedItem';

const ReservedContainer = () => {

  const [reservedItems, setReservedItems] = useState([]);
  const user = useSelector(state => state.user);
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://serene-oasis-96216.herokuapp.com/api/reservations/${user.id}`);
      const data = await response.json();
      setReservedItems(data);
    }
    )();
  }, []);

  return (
    <section className="h-full flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-bold">Your Reservations</h2>
      <table className="sm:w- full-width">
        <thead>
          <tr>
            <th>City</th>
            <th>Name</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
          {reservedItems.map((item) => (
            <tr key={item.id}>
              <td>{item.city}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}; 
export default ReservedContainer;