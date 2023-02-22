const isAuthorized = () => {
  const password = localStorage.getItem('Password');
  const login = localStorage.getItem('Login');
  return Boolean(password && login);
};

export default isAuthorized;
