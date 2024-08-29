import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import ROUTES from './Routes/routes';
import './App.css';

import Home from './Pages/Home/home';
import Projects from './Pages/Projects/projects';
import Project from './Components/Project/project';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={ROUTES.home} element={<Home/>} /> 
        <Route path={ROUTES.projects} element={<Projects/>}/>

        <Route path={ROUTES.project.path} element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
