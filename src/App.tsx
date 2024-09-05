import React, { useState } from 'react';
import StockData from './Component/StockInfo';

const App: React.FC = () => {
  const [symbol, setSymbol] = useState<string>('IBM');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Alpha Vantage Stock Data</h1>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter stock symbol"
        />
        <StockData symbol={symbol} />
      </div>
    </div>
  );
};

export default App;
