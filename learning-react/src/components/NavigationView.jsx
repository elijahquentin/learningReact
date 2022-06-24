import React from 'react';

function NavigationView(props) {
  return (
    <div className="navbar">
      {props.pages.map((page) => (
        <button
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

export default NavigationView;
