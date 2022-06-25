import NavigationBar from './components/NavigationBar';
import StocksView from './components/StocksView';
import React, { useState } from 'react';

function OtherView() {
  return <h1 className="other">Page is not yet deployed</h1>;
}

function App() {
  const [currentView, updateCurrentView] = useState('StocksView');
  const [pages, editPages] = useState([
    { title: 'Stocks', viewString: 'StocksView' },
    { title: 'Screener', viewString: 'Screener' },
    { title: 'Alerts', viewString: 'Alerts' },
  ]);

  return (
    <div>
      <NavigationBar
        currentView={currentView}
        updateCurrentView={updateCurrentView}
        pages={pages}
      />
      <button
        onClick={() => ApiTest()}>
      </button>
      {currentView == 'StocksView' ? <StocksView /> : <OtherView />}
    </div>
  );
}

function ApiTest() {
  // 'use strict';
  // var request = require('request');

  // // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
  // var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=QAZ5JQ7VSSDBZC04';

  // request.get({
  //   url: url,
  //   json: true,
  //   headers: { 'User-Agent': 'request' }
  // }, (err, res, data) => {
  //   if (err) {
  //     console.log('Error:', err);
  //   } else if (res.statusCode !== 200) {
  //     console.log('Status:', res.statusCode);
  //   } else {
  //     // data is successfully parsed as a JSON object:
  //     console.log(data);
  //   }
  // });

  // const request = require('request');

  // request('http://stackabuse.com', function (err, res, body) {
  //   console.log(body);
  // });

  let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=QAZ5JQ7VSSDBZC04';

  fetch(url)
    .then(res => res.json())
    .then(out =>
      console.log('Checkout this JSON! ', out))
    .catch(err => console.log(err));

}

export default App;
