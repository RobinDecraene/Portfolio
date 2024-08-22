import React from 'react';
import style from './bulletpoints.module.css';
import { FaStar } from "react-icons/fa";

const Big = ({children}) => {

  return (
    <div className={`${style.bulletpoints} ${style.big}`}>
      <FaStar size={30} color='#415A77' className={style.star}/>
      <span>
        {children}
      </span>
    </div>
  );
};

export default Big;