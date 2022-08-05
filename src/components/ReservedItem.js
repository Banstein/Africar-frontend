import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';

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
    <>
      <section className="fixed top w-screen h-full md:pl-[20vw] bg-[url('/src/assets/reserv.jpeg')] bg-no-repeat bg-200% reserve">
        <div className='flex items-center justify-end w-full h-full px-20 '>
          <div className='w-8/12 h-[70%] border rounded text-center flex flex-col justify-center items-center gap-[2rem] bg-[#9FBD3B]/70'>
            <h2 className='text-2xl font-bold text-gray-700 md:text-4xl md:mb-5'>
              Make your reservation
            </h2>
            {formSubmitted && (
              <div
                className='bg-#32CD32-100 border border-gray-400 text-#32CD32-700 px-4 py-3 rounded fixed top-4'
                role='alert'
              >
                <span className='block sm:inline'>{onFormSubmitMessage}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className='flex flex-col gap-[2rem]'>
              <label htmlFor='city' className='text-xl text-white md:text-2xl'>
                City
              </label>
              <input
                type='text'
                name='city'
                id='city'
                className='block w-full px-4 py-2 bg-white border border-gray-400 rounded-lg'
                placeholder='Enter your city'
                required
              />
              <label
                htmlFor='car_id'
                className='text-xl text-white md:text-2xl'
              >
                Car
              </label>
              <select
                name='car_id'
                id='car_id'
                className='block w-full px-4 py-2 bg-white border border-gray-400 rounded-lg'
              >
                {names.map((el) => (
                  <option key={el.car_id} value={el.car_id}>
                    {el.name}
                  </option>
                ))}
              </select>
              <div className='w-full'>
                <button
                  type='submit'
                  className='px-4 py-2 mr-2 font-bold text-white bg-gray-700 rounded hover:bg-gray-400'
                >
                  Reserve
                </button>
                <Link to='/'>
                  <button
                    type='#'
                    className='px-4 py-2 font-bold text-white bg-red-700 rounded hover:bg-red-400'
                  >
                    Back
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReserveForm;
