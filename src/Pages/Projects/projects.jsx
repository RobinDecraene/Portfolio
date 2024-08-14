import React from 'react';
import style from './projects.module.css';
import Title from '../../Components/Title/title';


const Projects = () => {
  


  return (
    <div className={style.page}>
      <Title>Websites</Title>
      <div className={style.cards}>
        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>
      </div>

      <Title>Apps</Title>
      <div className={style.cards}>
        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>
      </div>

      <Title>Design</Title>
      <div className={style.cards}>
        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>

        <div className={style.card}>
          <p>Title</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;