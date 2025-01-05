import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Authentication failed: ' + error.message);
  }
};

export const logout = async () => {
  try {
    await axios.post('/api/auth/logout');
    return true;
  } catch (error) {
    throw new Error('Logout failed: ' + error.message);
  }
};
