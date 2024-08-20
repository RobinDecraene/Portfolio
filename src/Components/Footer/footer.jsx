import React from 'react';
import style from './footer.module.css';
import ROUTES from '../../Routes/routes';
import { Link, useLocation  } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <div className={style.footerAlign}>
        <div className={style.footerLeft}>
          <Link to={ROUTES.home} className={location.pathname === ROUTES.home ? style.activeNav : ''}>Home</Link>
          <Link to={ROUTES.projects} className={location.pathname === ROUTES.projects ? style.activeNav : ''}>Projects</Link>
        </div>
        <FaStar size={25} color='#E0E1DD'/>
        <p>© 2024 Decraene Robin </p>
      </div>
    </footer>
  );
};

export default Footer;