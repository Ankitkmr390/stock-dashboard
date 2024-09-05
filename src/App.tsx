import React, { useState } from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';
import StockData from './Component/StockInfo';

const App: React.FC = () => {
  const [symbol, setSymbol] = useState<string>('IBM');

  return (
    

<Box
minHeight="100vh"
bgcolor="grey.100"
display="flex"
alignItems="center"
justifyContent="center"
>
<Paper
  sx={{
    width: '100%',
    maxWidth: 500,
    p: 4,
    boxShadow: 3,
    borderRadius: 2,
  }}
>
  <Typography variant="h4" fontWeight="bold" gutterBottom>
    Alpha Vantage Stock Data
  </Typography>
  <TextField
    fullWidth
    value={symbol}
    onChange={(e) => setSymbol(e.target.value)}
    variant="outlined"
    margin="normal"
    placeholder="Enter stock symbol"
  />
  <StockData symbol={symbol} />
</Paper>
</Box>
  );
};

export default App;
