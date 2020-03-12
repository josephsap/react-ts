import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createSimilar = payload => api.post('/similar', payload);
export const getAllSimilars = () => api.get('/similars');

const apis = {
  createSimilar,
  getAllSimilars
};

export default apis;