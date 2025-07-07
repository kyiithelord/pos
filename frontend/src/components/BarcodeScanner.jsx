import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";

export default function BarcodeScanner({ onDetected }) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader", 
      { fps: 10, qrbox: 250 }, 
      false
    );

    scanner.render(
      (decodedText) => {
        onDetected(decodedText);
        scanner.clear(); // Stop after first scan
      },
      (error) => {
        console.warn("Scan error:", error);
      }
    );

    return () => scanner.clear().catch(() => {});
  }, [onDetected]);

  return <div id="reader" style={{ width: "100%" }} />;
}
