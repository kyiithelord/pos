import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import POS from './pages/POS';
import Products from './pages/Products'; 
import { syncPendingSales } from './utils/sync';

function App() {
  useEffect(() => {
    const handleOnline = async () => {
      console.log('📶 Back online, syncing pending sales...');
      try {
        await syncPendingSales();
        console.log('✅ Sync complete!');
      } catch (error) {
        console.error('❌ Sync failed:', error);
      }
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>POS</Link>
        <Link to="/products">Add Product</Link>
      </nav>
      <Routes>
        <Route path="/" element={<POS />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
