import React from 'react';
import style from './home.module.css';
import Title from '../../Components/Title/title';
import { FaHorse } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import Page from '../../Components/Page/page';
import Section from '../../Components/Section/section';
import profielfoto from '../../Images/ik.png';
import LinkButton from '../../Components/Button/linkbutton';
import BigList from '../../Components/list/biglist';
import SmallList from '../../Components/list/smalllist';



const Home = () => {

  return (
    <Page>
      <Section customClass={style.firstSection}>
        <img src={profielfoto} alt='profielfoto' className={style.image}/>
        <div className={style.firstSectionText}>
          <span className={style.titles}>
            <h1>Ik ben Robin Decraene</h1>
            <h2>Front end developer</h2>
          </span>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <LinkButton link='https://www.linkedin.com/in/robin-decraene-5ab306220/'>Mijn LinkedIn</LinkButton>
        </div>
      </Section>


      <section className={style.sectionBlue}>
        <div className={style.sectionBlueWidht}>
          <div>
            <Title customClass={style.titleWhite}>Werkervaring</Title>
            <BigList>
              <p>Esign - Gent</p>
              <p>Front-end • Stagair</p>
              <p>Jan 2024 - Apr 2024</p>
            </BigList>

            <BigList>
              <p>Stad Gent - Gent</p>
              <p>Kleuterkamp • Animator</p>
              <p>2021 - 2023</p>
            </BigList>

            <BigList>
              <p>Bassischool De Vuurtoren - Drongen</p>
              <p>Lo Leerkracht • Stagair</p>
              <p>Apr 2021</p>
            </BigList>
          </div>

          <div>
            <Title customClass={style.titleWhite}>Opleiding</Title>
            <BigList>
              <p>Arteveldehogeschool - Gent</p>
              <p>Bachelor in Grafische en Digitale Media,
                <br/> New media development</p>
              <p>2021 - 2024</p>
            </BigList>

            <BigList>
              <p>Atheneum Voskenslaan - Gent</p>
              <p>Lichamelijke opvoeding en sport</p>
              <p>2015-2021</p>
            </BigList>
          </div>

          <div>
            <Title customClass={style.titleWhite}>Vaardigheden</Title>
            <SmallList color={'#E0E1DD'}>React</SmallList>
            <SmallList color={'#E0E1DD'}>React Native</SmallList>
          </div>
        </div>
        
      </section>

      <Section>
        <div className={style.properties}>
          <Title>Eigenschappen</Title>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          </p>

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          </p>
        </div>

        <div className={style.other}>
          <div>
            <Title>Hobbies</Title>
            <div className={style.hobbies}>
              <span>
                <FaHorse size={25} color='#8699B2'/>
                <p>Paardrijden</p>
              </span>

              <span>
                <IoGameController size={25} color='#8699B2'/>
                <p>Gamen</p>
              </span>

              <span>
                <IoIosFitness size={25} color='#8699B2'/>
                <p>Fitness</p>
              </span>
            </div>
          </div>

          <div>
            <Title>Talen</Title>
            <span className={style.language}>
              <SmallList color={'#8699B2'} customClass={style.languageColor}>Nederlands</SmallList>
              <SmallList color={'#8699B2'} customClass={style.languageColor}>Engels</SmallList>
            </span>

          </div>
        </div>
      </Section>
    </Page>
  );
};

export default Home;