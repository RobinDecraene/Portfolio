import React from 'react';
import style from './list.module.css';
import { FaStar } from "react-icons/fa";

const BigList = ({children}) => {

  return (
    <div className={`${style.bulletpoints} ${style.big}`}>
      <FaStar size={30} color='#415A77' className={style.star}/>
      <span>
        {children}
      </span>
    </div>
  );
};

export default BigList;