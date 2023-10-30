import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './StateProvider';
import { initialState } from './reducer';
import { reducer } from './reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <HashRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
    </HashRouter>
);

