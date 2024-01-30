import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3030',
  headers: {
    'Content-type': 'application/json',
  }
});

const findAll = async () => {
  const response = await apiClient.get('/cities');
  return response.data;
}

export const WeatherService = {
  findAll,
}
