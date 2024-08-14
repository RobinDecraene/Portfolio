import React from 'react';
import style from './title.module.css';

const Title = ({children}) => {


  return (
    <h1 className={style.title}>
      {children}
    </h1>
  );
};

export default Title;