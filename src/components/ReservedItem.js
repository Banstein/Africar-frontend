import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ReserveForm = () => {
  const [names, setNames] = useState([]);
  // const user = useSelector((state) => state.user.user);
  const user = { id: 1, name: 'John' };
  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://africar-premium.herokuapp.com/api/v1/cars'
      );
      const data = await res.json();
      const names = data.map((el) => ({
        car_id: el.id,
        name: `${el.name}`,
      }));
      setNames(names);
    })();
  }, []);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [onFormSubmitMessage, setOnFormSubmitMessage] = useState(
    'Form submission failed. Make sure to fill all the fields.'
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    if (event.target.city.value && event.target.car_id.value && user.id) {
      axios
        .post(
          `https://africar-premium.herokuapp.com//api/v1/users/:user_id/reservations`,
          {
            id: 1,
            city: event.target.city.value,
            car_id: event.target.car_id.value,
            user_id: 1,
          }
        )
        .then(() => {
          setOnFormSubmitMessage('Form submission succeeded.');
        });
    }
  };
  return (
    <section className="fixed top-0 w-full h-full md:pl-[20vw] bg-[url('/src/assets/reserveCar.jpg')] bg-no-repeat bg-200%">
      <div className='w-full h-full bg-[#9FBD3B]/75 px-20 flex flex-col justify-center'>
        <div className='w-full h-[50%] text-center flex flex-col justify-center items-center gap-[2rem]'>
          <h1 className='font-bold text-white text-3xl md:text-5xl md:mb-5'>
            MAKE YOUR RESERVATION
          </h1>
          {formSubmitted && (
            <div
              className='bg-#32CD32-100 border border-orange-400 text-#32CD32-700 px-4 py-3 rounded fixed top-4'
              role='alert'
            >
              <span className='block sm:inline'>{onFormSubmitMessage}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className='flex flex-col gap-[2rem]'>
            <label htmlFor='city' className='text-white text-xl md:text-2xl'>
              City
            </label>
            <input
              type='text'
              name='city'
              id='city'
              className='bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full'
              placeholder='Enter your city'
              required
            />
            <label htmlFor='car_id' className='text-white text-xl md:text-2xl'>
              Car
            </label>
            <select
              name='car_id'
              id='car_id'
              className='bg-white border border-gray-400 rounded-lg py-2 px-4 block w-full'
            >
              {names.map((el) => (
                <option key={el.car_id} value={el.car_id}>
                  {el.name}
                </option>
              ))}
            </select>
            <button
              type='submit'
              className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
            >
              Reserve
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ReserveForm;
