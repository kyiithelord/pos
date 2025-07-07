import { openDB } from 'idb';

const DB_NAME = 'micro-pos-db';
const DB_VERSION = 1;
const STORE_SALES = 'pending-sales';

export async function initDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_SALES)) {
        db.createObjectStore(STORE_SALES, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}

export async function savePendingSale(sale) {
  const db = await initDB();
  return db.add(STORE_SALES, sale);
}

export async function getPendingSales() {
  const db = await initDB();
  return db.getAll(STORE_SALES);
}

export async function clearPendingSales() {
  const db = await initDB();
  const tx = db.transaction(STORE_SALES, 'readwrite');
  await tx.store.clear();
  await tx.done;
}
