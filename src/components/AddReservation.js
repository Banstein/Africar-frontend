import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


const ReservePage = () => {
  const [names, setNames] = useState([]);
  const user = useSelector((state) => state.user);
  // const user = { id: 1, name: 'John' };
  useEffect(() => {
    (async () => {
      const res = await fetch('https://africar-premium.herokuapp.com/api/v1/cars');
      const data = await res.json();
      const names = data.map((el) => ({
        car_id: el.id,
        names: `${el.name}`,
      }));
      setNames(names);
    })();
  }, []);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [onFormSubmitMessage, setOnFormSubmitMessage] = useState('Form submission failed. Make sure to fill all the fields.');
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    if (event.target.city.value && event.target.date.value) {
      axios.post(`https://africar-premium.herokuapp.com/api/v1/users/:user_id/reservations `, {
        city: event.target.city.value,
        date: event.target.date.value,
        user_id: user.id,
        car_id: event.target.car_id.value,
        id: event.target.id.value,
      }).then(() => {
        setOnFormSubmitMessage('Form submission succeeded.');
      });
    }
  };
  return (
    <section className="fixed top-0 w-full h-full md:pl-[20vw] bg-[url('/src/assets/backgroundReserveCar.jpg')] bg-right bg-no-repeat bg-100%">
      <div className="h-full  bg-[#81B622]/70 .w-screen px-20 flex flex-col justify-center">
        <div className="w-full h-[50%] text-center flex flex-col justify-center items-center gap-[2rem]">
          <h1 className="font-bold text-white text-3xl md:text-5xl md:mb-5">
            MAKE YOUR RESERVATION
          </h1>
          {formSubmitted && (
            <div className="bg-#81B622-100 border border-#81B622-400 text-#81B622-700 px-4 py-3 rounded fixed top-4" role="alert">
              <span className="block sm:inline">{onFormSubmitMessage}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="w-full h-full text-center flex flex-col items-center gap-[2rem] md:flex-row lg:w-[70%] md:h-auto">
            <div className="w-full md:w-auto md:h-full">
              <select name="car_id" className="bg-#81B622-100 border border-#81B622-400 text-#81B622-700 px-4 py-3 rounded">
                <option value="">Select a car</option>
                {names.map((el) => (
                  <option key={el.car_id} value={el.car_id}>
                    {el.names}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-auto md:h-full">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="bg-#81B622-100 border border-#81B622-400 text-#81B622-700 px-4 py-3 rounded"
              />
            </div>
            <div className="w-full md:w-auto md:h-full">
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="bg-#81B622-100 border border-#81B622-400 text-#81B622-700 px-4 py-3 rounded"
              />
            </div>
            <div className="w-full md:w-auto md:h-full">
              <button type="submit" className="bg-#81B622-100 border border-#81B622-400 text-#81B622-700 px-4 py-3 rounded">
                Reserve
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default ReservePage;