import React from 'react';
import useFetchData from '../Services/apiService';

interface StockDataProps {
  symbol: string;
}

const StockData: React.FC<StockDataProps> = ({ symbol }) => {
  const { data, loading, error } = useFetchData({ symbol });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <h2 className="text-xl font-bold">Stock Data for {symbol}</h2>
      {data && data['Time Series (Daily)'] && (
        <ul>
          {Object.entries(data['Time Series (Daily)']).map(([date, values]: any) => (
            <li key={date} className="mb-2">
              <strong>{date}:</strong> Open: {values['1. open']}, Close: {values['4. close']}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockData;
