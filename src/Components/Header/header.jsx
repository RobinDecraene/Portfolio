import React from 'react';
import style from './header.module.css';
import ROUTES from '../../Routes/routes';
import { Link, useLocation } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const isProjectsActive = location.pathname.startsWith(ROUTES.projects);

  return (
    <header>
      <nav>
        <a href="/" className={style.name}><FaStar size={25} color='#E0E1DD' className={style.navStar}/>Robin</a>
        <div className={style.navRight}>
          <Link to={ROUTES.home} className={location.pathname === ROUTES.home ? style.activeNav : ''}>Home</Link>
          <Link to={ROUTES.projects} className={isProjectsActive ? style.activeNav : ''}>Projects</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
