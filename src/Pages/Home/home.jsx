import React from 'react';
import style from './home.module.css';
import Button from '../../Components/Button/button';
import Title from '../../Components/Title/title';
import { FaHorse } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import Page from '../../Components/Page/page';
import Section from '../../Components/Section/section';
import profielfoto from '../../Images/ik.png';


const Home = () => {

  return (
    <Page>
      <Section>
        <img src={profielfoto} alt='profielfoto' className={style.image}/>
        <div>
          <span>
            <h1>Ik ben Robin Decraene</h1>
            <h2>Front end developer</h2>
          </span>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <Button>Mijn LinkedIn</Button>
        </div>
      </Section>


      <Section customClass={style.sectionBlue}>
        <div className={style.sectionBlueWidht}>
          <div>
            <Title customClass={style.titleWhite}>Werkervaring</Title>

          </div>

          <div>
            <Title customClass={style.titleWhite}>Opleiding</Title>
          </div>

          <div>
            <Title customClass={style.titleWhite}>Vaardigheden</Title>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
        
      </Section>

      <Section>
        <div>
          <Title>Eigenschappen</Title>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          </p>

          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
          </p>
        </div>

        <div>
          <div>
            <Title>Hobbies</Title>
            <span>
              <FaHorse size={25}/>
              <p>Paardrijden</p>
            </span>

            <span>
              <IoGameController size={25}/>
              <p>Gamen</p>
            </span>

            <span>
              <IoIosFitness size={25}/>
              <p>Fitness</p>
            </span>
          </div>

          <div>
            <Title>Talen</Title>
            <ul>
              <li>Nederlands</li>
              <li>Engels</li>
            </ul>
          </div>
        </div>
      </Section>
    </Page>
  );
};

export default Home;