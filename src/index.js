import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Counter } from './container';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="Counter" element={<Counter />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root'),
);
