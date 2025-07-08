// utils/sync.js
import { postSale } from '../services/api';

export const syncPendingSales = async () => {
  const pending = JSON.parse(localStorage.getItem('pending_sales') || '[]');
  if (pending.length === 0) return;

  for (const sale of pending) {
    try {
      await postSale(sale);
    } catch (error) {
      console.error('❌ Sync failed:', error);
      throw error; // make App.jsx show "Failed to sync" if one fails
    }
  }

  // Clear pending sales if all succeed
  localStorage.removeItem('pending_sales');
};
