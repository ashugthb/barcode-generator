// pages/barcode.js
import { useState } from 'react';
import Barcode from '../component/Barcode';

const BarcodePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [barcodeValue, setBarcodeValue] = useState('');

  const handleGenerateBarcode = () => {
    setBarcodeValue(inputValue);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Barcode Generator</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
        style={{ padding: '10px', width: '300px' }}
      />
      <br />
      <button
        onClick={handleGenerateBarcode}
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Generate Barcode
      </button>

      {barcodeValue && (
        <div style={{ marginTop: '40px' }}>
          <h2>Generated Barcode:</h2>
          <Barcode value={barcodeValue} />
        </div>
      )}
    </div>
  );
};

export default BarcodePage;
