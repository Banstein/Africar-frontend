const authenticateUser = async (token) => {
  const res = await fetch(
    'https://car-booking-premium.herokuapp.com/login',
    {
      headers: {
        'Content-Type': 'application/json',
        Authenticate: token,
      },
    }
  );
  const data = await res.json();

  return data;
};

export default authenticateUser;
