import { useState, useEffect } from 'react';

const API_KEY = 'RIBXT3XYLI69PC0Q';
const BASE_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY';

interface FetchDataProps {
  symbol: string;
}

const useFetchData = ({ symbol }: FetchDataProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}&symbol=${symbol}&apikey=${API_KEY}`);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  return { data, loading, error };
};

export default useFetchData;
