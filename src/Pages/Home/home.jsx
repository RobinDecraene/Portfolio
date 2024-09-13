import React, { useEffect, useState } from 'react';
import style from './home.module.css';
import Title from '../../Components/Title/title';
import { FaHorse } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import Page from '../../Components/Page/page';
import Section from '../../Components/Section/section';
import LinkButton from '../../Components/Button/link';
import BigList from '../../Components/list/biglist';
import SmallList from '../../Components/list/smalllist';
import { firebase } from '../../firebase';
import Loading from '../../Components/Loading/loading';

const Home = () => {
  const [programmingSkills, setProgrammingSkills] = useState([]);
  const [otherSkills, setOtherSkills] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const doc = await firebase.firestore().collection('skills').doc('skills').get();
        if (doc.exists) {
          setProgrammingSkills(doc.data().programming || []);
          setOtherSkills(doc.data().other || []);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    const fetchProfilePhoto = async () => {
      try {
        const url = await firebase.storage().ref('CV/ik.png').getDownloadURL();
        setProfilePhoto(url); 
      } catch (error) {
        console.error('Error fetching profile photo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
    fetchProfilePhoto();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Page>
      <Section customClass={style.firstSection}>
        <span className={style.image}>
          <img src={profilePhoto} alt='profielfoto' />
        </span>

        <div className={style.firstSectionText}>
          <span className={style.titles}>
            <h1>Ik ben Robin Decraene</h1>
            <h2>Front end developer</h2>
          </span>
          <p className={style.intro}>
            Als net afgestudeerde front-end developer wil ik mijn programmeervaardigheden verder ontwikkelen door aan uitdagende projecten te werken.
            Ik streef ernaar mijn kennis van de talen die ik al beheers te verdiepen en nieuwe programmeertalen te leren. Mijn doel is om gebruiksvriendelijke,
            toegankelijke en visueel aantrekkelijke websites te ontwikkelen.
          </p>
          <LinkButton link='https://www.linkedin.com/in/robin-decraene-5ab306220/'>Mijn LinkedIn</LinkButton>

        </div>
      </Section>


      <section className={style.sectionBlue}>
        <div className={style.sectionBlueWidht}>
          <div className={style.workColom}>
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

          <div className={style.schoolColom}>
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

          <div className={style.skillColom}>
            <Title customClass={style.titleWhite}>Vaardigheden</Title>
              <div className={style.skills}>
                <span>
                  {programmingSkills.map((skill, index) => (
                    <SmallList key={index} color={'#E0E1DD'}>{skill}</SmallList>
                  ))}
                </span>
                <span>
                  {otherSkills.map((skill, index) => (
                    <SmallList key={index} color={'#E0E1DD'}>{skill}</SmallList>
                  ))}
                </span>
              </div>
          </div>
        </div>
        
      </section>

      <Section customClass={style.lastSection}>
        <div className={style.properties}>
          <Title>Eigenschappen</Title>
          <p>
            Ik ben een teamspeler die ook de leiding durft te nemen wanneer dat nodig is. Tijdens mijn studie aan Arteveldehogeschool was ik bijvoorbeeld squadlead bij het ontwikkelen van een escaperoom. 
            Ik kan goed kalm blijven in stressvolle situaties, een vaardigheid die ik heb opgedaan door veel met kleine kinderen te werken. Dit heeft me ook geleerd om zeer verantwoordelijk te zijn.
             Maar het belangrijkste van al is dat ik zeer graag mijn programmeervaardigheden wil verbeteren en zeer graag nieuwe talen wil bijleren. Daarnaast ben ik ook in het bezit van een B-rijbewijs.
          </p>
        </div>

        <div className={style.other}>
          <div>
            <Title>Hobbies</Title>
            <div className={style.hobbies}>
              <span>
                <FaHorse size={30} color='#8699B2'/>
                <p>Paardrijden</p>
              </span>

              <span>
                <IoGameController size={30} color='#8699B2'/>
                <p>Gamen</p>
              </span>

              <span>
                <IoIosFitness size={30} color='#8699B2'/>
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