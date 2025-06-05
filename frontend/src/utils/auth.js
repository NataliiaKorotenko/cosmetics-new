export const login = (email, password) => {
  return email === 'admin@example.com' && password === '123456';
};

export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const logout = () => {
  localStorage.removeItem('isAuthenticated');
};
