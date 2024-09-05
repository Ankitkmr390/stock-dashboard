import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import useFetchData from '../Services/apiService';

interface StockDataProps {
  symbol: string;
}

const StockData: React.FC<StockDataProps> = ({ symbol }) => {
  const { data, loading, error } = useFetchData({ symbol });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    

    <Box p={2} bgcolor="grey.200" borderRadius={2}>
      <Typography variant="h5" fontWeight="bold">
        Stock Data for {symbol}
      </Typography>
      {data && data['Time Series (Daily)'] && (
        <List>
          {Object.entries(data['Time Series (Daily)']).map(([date, values]: any) => (
            <ListItem key={date} sx={{ mb: 1 }}>
              <Typography component="span" fontWeight="bold">{date}:</Typography> Open: {values['1. open']}, Close: {values['4. close']}
            </ListItem>
          ))}
        </List>
      )}
    </Box>

    
  );
};

export default StockData;
