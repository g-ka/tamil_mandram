import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Data_provider } from './context/Data_box';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/tamil_mandram'>
      <Data_provider>
        <Routes>
          <Route path='/*' element={<App />}/>
        </Routes>
      </Data_provider>      
    </BrowserRouter>
  </React.StrictMode>
);