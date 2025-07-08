// src/pages/Products.jsx
import React, { useState } from 'react';
import { createProduct } from '../services/api';

const Products = () => {
  const [form, setForm] = useState({ name: '', price: '', stock: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct({
        name: form.name,
        price: parseFloat(form.price),
        stock: parseInt(form.stock),
      });
      alert('✅ Product created!');
      setForm({ name: '', price: '', stock: '' });
    } catch (error) {
      console.error(error);
      alert('❌ Failed to create product.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required /><br />
        <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price" required /><br />
        <input name="stock" type="number" value={form.stock} onChange={handleChange} placeholder="Stock" required /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Products;
