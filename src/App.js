import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import ROUTES from './Routes/routes';
import './App.css';

import Home from './Pages/Home/home';
import Projects from './Pages/Projects/projects';



function App() {
  return (
    <div className="white">
      <Header/>
      <Routes>
        <Route path={ROUTES.home} element={<Home/>} /> 
        <Route path={ROUTES.projects} element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
