import axios from 'axios';
import { getPendingSales, clearPendingSales } from './indexedDB';

const API_BASE_URL = 'http://localhost:8000';

export async function syncPendingSales() {
  try {
    const sales = await getPendingSales();
    if (sales.length === 0) return;

    // Send sales to backend one by one or in batch
    for (const sale of sales) {
      await axios.post(`${API_BASE_URL}/sales`, sale);
    }
    await clearPendingSales();
    console.log('Synced pending sales to backend');
  } catch (error) {
    console.error('Failed to sync sales:', error);
  }
}
