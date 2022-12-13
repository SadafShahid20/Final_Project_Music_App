import React from 'react';
 import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
// import { Router } from 'express';
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import  reducer  from './context/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          {/* <Routes> */}
            <App />
            {/* </Routes> */}
        </BrowserRouter>
   </StateProvider>
  
);