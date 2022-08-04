const requestRegisterUser = async (body) => {
  const parsedBody = JSON.parse(body);
  const newBody = {
    user: {
      username: parsedBody.username,
      password: parsedBody.password,
    },
  };
  const res = await fetch('https://africar-premium.herokuapp.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBody),
  });

  const data = await res.json();

  if (!data.id) {
    return undefined;
  }

  return data;
};

export default requestRegisterUser;
