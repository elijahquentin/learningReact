import React, { useState } from 'react';

function StockRow(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <h1>{props.ticker}</h1>
      </div>
      <div className="col-md-6">
        <h1>Current Price: ${props.price}</h1>
      </div>
    </div>
  );
}

export default StockRow;
