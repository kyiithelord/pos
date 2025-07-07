import React, { useEffect } from 'react';
import POS from './pages/POS';
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
    <div>
      <POS />
    </div>
  );
}

export default App;
