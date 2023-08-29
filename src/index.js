import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const WidgetDivs = document.querySelectorAll('.ray_widget')

WidgetDivs.forEach(divElement => {
  const root = ReactDOM.createRoot(divElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})
