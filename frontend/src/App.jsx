import React, { useEffect } from 'react';
import POS from './pages/POS';
import { syncPendingSales } from './utils/sync';

export default function App() {
  useEffect(() => {
    async function handleOnline() {
      console.log('Back online, syncing...');
      await syncPendingSales();
    }
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  return (
    <div>
      <h1>Micro POS App</h1>
      <POS />
    </div>
  );
}
