import React, { useState } from 'react';
import StockRow from './StockRow';

function StocksView() {
  const [stocksList, updateStocksList] = useState([
    { ticker: 'ETH', price: 20500, percent: 4.43 },
    { ticker: 'AAPL', price: 157, percent: -2.15 },
  ]);

  return stocksList.map((stock) => (
    // Below 'key' is necessary for each list item to be unique in the 'props' area of the StockRow file

    <div className="container" key={stock.ticker}>
      <StockRow
        ticker={stock.ticker}
        price={stock.price}
        percentChange={stock.percent}
      />
    </div>
  ));
}

export default StocksView;
