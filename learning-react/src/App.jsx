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
      {currentView == 'StocksView' ? <StocksView /> : <OtherView />}
    </div>
  );
}

export default App;
