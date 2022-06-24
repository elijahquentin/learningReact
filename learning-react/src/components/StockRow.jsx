import React, { useState } from 'react';

function StockRow(props) {
  return (
    <div className={props.percentChange >= 0 ? 'row row-green' : 'row row-red'}>
      <div className="col-md-3">
        <h1>{props.ticker}</h1>
      </div>
      <div className="col-md-3 percent">
        <h1>{props.percentChange}%</h1>
      </div>
      <div className="col-md-6">
        <h1>Current Price: ${props.price}</h1>
      </div>
    </div>
  );
}

export default StockRow;
