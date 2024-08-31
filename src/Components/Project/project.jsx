import React from 'react';
import style from './project.module.css';
import Page from '../Page/page';
import noImage from '../../Images/no-photo.png';
import Section from '../Section/section';
import SmallList from '../list/smalllist';
import Title from '../Title/title';
import { Link } from 'react-router-dom';
import ROUTES from '../../Routes/routes';
import { FaArrowLeft } from "react-icons/fa";
import LinkButton from '../Button/linkbutton';


const Project = () => {
  
  return (
    <Page>
      <Section>
      <Link to={ROUTES.projects} className={style.arrow}><FaArrowLeft size={25} color='#8699B2' /></Link>
        <div className={style.firstImg}>
          <img src={noImage} alt='img'/>
        </div>
        
        <div className={style.blokImg}>
          <img src={noImage} alt='img'/>
          <img src={noImage} alt='img'/>
        </div>
      </Section>

      <Section>
        <div>
          <Title>Title project</Title>
          <p>
            beschrijving van het project
          </p>
        </div>
        <div>
        <Title>Programmeertalen</Title>
        <SmallList color={'#8699B2'} customClass={style.color}>PHP</SmallList>
        <LinkButton>Github</LinkButton>
        </div>

      </Section>



    </Page>
  );
};

export default Project;