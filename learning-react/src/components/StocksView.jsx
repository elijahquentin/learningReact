import React, { useState } from 'react';
import StockRow from './StockRow';

function StocksView() {
  //'State' area where the variables update the view
  const [stocksList, updateStocksList] = useState([
    { ticker: 'ETH', price: 1100, percent: 4.43 },
    { ticker: 'AAPL', price: 157, percent: -2.15 },
    { ticker: 'DOGE', price: 0.003, percent: 114.2 },
    { ticker: 'AMZN', price: 106, percent: -12.15 },
    { ticker: 'BTC', price: 20500, percent: -11.12 },
  ]);

  //Arrow function below dictates that the keyword 'stock' represents the iterated items
  return stocksList.map((stock) => (
    // Below 'key' is necessary for each list item to be unique in the 'props' area of the StockRow file to ensure optimization when rendering

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
