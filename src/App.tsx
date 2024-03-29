import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HomePageComponent from './components/HomePageComponent';
import FavoritesComponent from './components/FavoritesComponent';

function App() {
  return (
   <BrowserRouter>
      <NavbarComponent/>
        <Routes>
            <Route path='/' element={<FavoritesComponent/>} />
        </Routes>
        <HomePageComponent/>
   </BrowserRouter>

  );
}

export default App;
