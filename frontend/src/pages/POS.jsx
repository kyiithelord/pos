import React, { useState } from 'react';
import BarcodeScanner from '../components/BarcodeScanner';

function POS() {
  const [scanned, setScanned] = useState(null);

  return (
    <div>
      <h2>POS</h2>
      <BarcodeScanner onDetected={(code) => setScanned(code)} />
      {scanned && <p>Scanned: {scanned}</p>}
    </div>
  );
}

export default POS;
