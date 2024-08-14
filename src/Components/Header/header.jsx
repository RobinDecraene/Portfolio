import React from 'react';
import style from './header.module.css';
import ROUTES from '../../Routes/routes';
import { Link, useLocation  } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  
  return (
    <header>
      <nav>
        <a href="/">Robin</a>
        <div className={style.navRight}>
        <Link to={ROUTES.home} className={location.pathname === ROUTES.home ? style.activeNav : ''}>Home</Link>
        <Link to={ROUTES.projects} className={location.pathname === ROUTES.projects ? style.activeNav : ''}>Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;