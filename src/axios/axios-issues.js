import axios from 'axios';
import { BASE_URL } from '../utils';

export const createIssue = async (
  title,
  description,
  priority,
  currentUser
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/issues`,
      {
        title,
        description,
        priority,
      },
      {
        headers: {
          'x-token': currentUser.token,
        },
      }
    );
    alert('REPORTE CREADO EXITOSAMENTE');
    return response.data;
  } catch (err) {
    return alert(err.response.data.msg);
  }
};
