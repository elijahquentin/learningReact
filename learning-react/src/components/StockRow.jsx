import React, { useState } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function StockRow(props) {
  return (
    <span className="m-2">
      <h1>{props.ticker}</h1>
      <h1 className="small">Current Price: ${props.price}</h1>
    </span>
  );
}

export default StockRow;
