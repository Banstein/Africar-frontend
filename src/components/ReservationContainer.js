import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ReservationContainer = () => {
  const [reservations, setReservations] = useState([]);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://africar-premium.herokuapp.com/api/v1/users/:user_id/reservations`,
      );
      const data = await res.json();
      setReservations(data);
    })();
  }, []);
  return (
    <section className="h-full text-center flex flex-col items-center pt-20 w-4/5">
      <h1 className="font-bold text-3xl md:text-5xl md:mb-5">
        MY RESERVATIONS
      </h1>
      <table className="sm:w-[80%]">
        <thead>
          <tr>
            <th>City</th>
            <th>Car Model</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.city}</td>
              <td>
                {new Date(reservation.created_at).toLocaleDateString('en-UK')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ReservationContainer;
