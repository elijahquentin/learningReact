import React, { useState } from 'react';
import StockRow from './StockRow';

function StocksView() {
  const [stocksList, updateStocksList] = useState([
    { ticker: 'BTC', price: 21000 },
    { ticker: 'AAPL', price: 150 },
  ]);

  return stocksList.map((stock) => (
    // Below 'key' is necessary for each list item to be unique in the 'props' area of the StockRow file
    <StockRow ticker={stock.ticker} price={stock.price} key={stock.ticker} />
  ));
}

export default StocksView;
