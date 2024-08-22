import React from 'react';
import style from './list.module.css';
import { FaStar } from "react-icons/fa";

const SmallList = ({children}) => {

  return (
    <span className={`${style.bulletpoints} ${style.small}`}>
      <FaStar size={18} color='#E0E1DD' className={style.star}/>
      <p>
        {children}
      </p>

    </span>
  );
};

export default SmallList;