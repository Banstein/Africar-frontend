import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const ReserveForm = () => {
  const [carName, setCarName] = useState([]);
  const user = useSelector(state => state.user);
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://africar-premium.herokuapp.com/api/v1/cars/`);
      const data = await response.json();
      const carName = data.map((item) => ({
        car_id: item.id,
        car_name: item.name,
      }));
      setCarName(carName);
      }
    )();
  }, []);
  const [formSubmit, setFormSubmit] = useState(false);
  const [formData, setFormData] = useState('Formsubmission failed.Enter all fileds');
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmit(true);
    setTimeout(() => { setFormSubmit(false); }, 3000);
    if (e.target.city.value && e.target.car_id.value && e.target.user_id.value) {
      axios.post(`https://africar-premium.herokuapp.com/api/v1/reservations/${user.id}`, {
        city: e.target.city.value, 
        car_id: e.target.car_id.value,
        user_id: e.target.user_id.value,
      })  
      .then(() => {
        setFormData('Formsubmission successful');
      }
      );
    }
  }
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl font-bold">Reserve a car</h2>
      <form className="w-full max-w-lg p-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="Enter your city"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            id="date"
            type="date"
            placeholder="Enter your date"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="car_id" className="block text-gray-700 text-sm font-bold mb-2">
            Car
          </label>
          <select

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="car_id"
            required
          >
            <option value="">Select a car</option>
            {carName.map((item) => (
              <option key={item.car_id} value={item.car_id}>
                {item.car_name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <button

            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      {formSubmit && <p className="text-center text-gray-700 text-sm">{formData}</p>}
    </section>
  );
};
export default ReserveForm;