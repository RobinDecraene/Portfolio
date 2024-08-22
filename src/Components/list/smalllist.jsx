import React from 'react';
import style from './list.module.css';
import { FaStar } from "react-icons/fa";

const SmallList = ({children, customClass, color}) => {

  return (
    <span className={`${style.bulletpoints} ${style.small}`}>
      <FaStar size={18} color={color} className={style.star}/>
      <p  className={customClass}>
        {children}
      </p>

    </span>
  );
};

export default SmallList;