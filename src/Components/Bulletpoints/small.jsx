import React from 'react';
import style from './bulletpoints.module.css';
import { FaStar } from "react-icons/fa";

const Small = ({children}) => {

  return (
    <span className={`${style.bulletpoints} ${style.small}`}>
      <FaStar size={18} color='#415A77' className={style.star}/>
      <p>
        {children}
      </p>

    </span>
  );
};

export default Small;