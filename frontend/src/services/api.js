import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export const fetchProducts = async () => {
  const res = await axios.get(`${API_BASE}/products`);
  return res.data;
};

export const postSale = async (sale) => {
  const res = await axios.post(`${API_BASE}/sales`, sale);
  return res.data;
};

export const createProduct = async (product) => {
  // product = { name: string, price: number, stock: number }
  const res = await axios.post(`${API_BASE}/products`, product);
  return res.data;
};
