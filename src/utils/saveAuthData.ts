const saveAuthData = (login: string, password: string) => {
  localStorage.setItem('Login', login);
  localStorage.setItem('Password', password);
};

export default saveAuthData;
