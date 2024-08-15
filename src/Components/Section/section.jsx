import React from 'react';
import style from './section.module.css';

const Section = ({children, customClass}) => {

  return (
    <section className={`${style.section} ${customClass}`}>
      {children}
    </section>
  );
};

export default Section;