import React from 'react';
import style from './projects.module.css';
import Title from '../../Components/Title/title';
import Page from '../../Components/Page/page';


const Projects = () => {
  


  return (
    <Page>
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

    </Page>
  );
};

export default Projects;