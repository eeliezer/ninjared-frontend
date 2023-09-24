import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const createUser = async (nombre, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      nombre,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    alert('¡Usuario ya registrado!');
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    alert('¡Usuario no registrado o contraseña invalida!');
  }
};

export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}/auth/verify`, {
      email,
      code,
    });
    /*    console.log('Usuario verificado'); */
    return response.data;
  } catch (error) {
    return alert(error.response.data.msg);
  }
};

export const recoverPassword = async email => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/forgot-password`, {
      email,
    });
    return data;
  } catch (error) {
    return alert(error.response.data.msg);
  }
};

export const passwordReset = async (password, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}/auth/reset-password`, {
      code,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};
