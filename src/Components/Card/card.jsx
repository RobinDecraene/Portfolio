import React from 'react';
import style from './card.module.css';

const Card = ({children, link}) => {

  return (
    <a href={link} className={style.card}>
      {children}
    </a>
  );
};

export default Card;