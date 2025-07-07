import React, { useState } from 'react';
import { createProduct } from '../services/api';

const Products = () => {
  const [form, setForm] = useState({ name: '', price: '', stock: '' });

  // Handle input change for form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit called with form:', form);

    // Validate numbers
    if (isNaN(Number(form.price)) || isNaN(Number(form.stock))) {
      alert('Price and Stock must be numbers');
      return;
    }

    try {
      console.log('Calling createProduct API...', form);
      await createProduct({
        name: form.name,
        price: parseFloat(form.price),
        stock: parseInt(form.stock, 10),
      });
      console.log('Product created successfully');
      alert('✅ Product created!');
      setForm({ name: '', price: '', stock: '' });
    } catch (error) {
      console.error('API error:', error.response || error);
      alert('❌ Failed to create product.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <br />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          step="0.01"
          required
        />
        <br />
        <input
          name="stock"
          value={form.stock}
          onChange={handleChange}
          placeholder="Stock"
          type="number"
          required
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Products;
