import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ReservedContainer = () => {

  const [reservedItems, setReservedItems] = useState([]);
  const user = useSelector(state => state.user);
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://africar-premium.herokuapp.com/api/v1/reservations/`);
      console.log(response);
      const data = await response.json();
      setReservedItems(data);
    }
    )();
  }, []);

  return (
    <section className="h-full flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-bold">Your Reservations</h2>
      <table className="table-auto w-full p-4">
        <thead>
          <tr>
            <th>City</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody className="bg-white px-4">
          {reservedItems.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.city}</td>
              <td className="border px-4 py-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}; 
export default ReservedContainer;