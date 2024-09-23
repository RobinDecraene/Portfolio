import React from 'react';
import style from './card.module.css';

const Card = ({ link, img, altImg, title, date}) => {
  return (
    <a href={link} className={style.card}>
      <img src={img} alt={altImg}/>
      <div className={style.overlay}>
        <p>{title}, {date}</p>
      </div>
    </a>
  );
};

export default Card;
