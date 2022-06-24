import React from 'react';

function NavigationBar(props) {
  return (
    <div className="navbar">
      {props.pages.map((page) => (
        <button
          disabled={page.viewString == props.currentView}
          key={page.viewString}
          className={
            page.viewString == props.currentView
              ? 'nav-button active'
              : 'nav-button'
          }
          onClick={() => props.updateCurrentView(page.viewString)}
        >
          {page.title}
        </button>
      ))}
    </div>
  );
}

export default NavigationBar;
