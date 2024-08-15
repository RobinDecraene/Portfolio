import React from 'react';
import style from './page.module.css';

const Page = ({children}) => {

  return (
    <div className={style.page}>
      {children}
    </div>
  );
};

export default Page;