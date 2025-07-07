// services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const fetchProducts = () => API.get('/products');
export const createSale = (data) => API.post('/sales', data);
