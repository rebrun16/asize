import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/home/HomePage"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
      </Route>
    </Routes>
    <App />
  </BrowserRouter>
);

