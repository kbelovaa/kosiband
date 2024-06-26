import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import './App.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
