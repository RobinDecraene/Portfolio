import React, { useEffect, useState } from 'react';
import style from './projects.module.css';
import Title from '../../Components/Title/title';
import Page from '../../Components/Page/page';
import { firebase } from '../../firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  const [websites, setWebsites] = useState([]);
  const [designs, setDesigns] = useState([]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('websites').get();
        const websitesArray = [];
        querySnapshot.forEach((doc) => {
          websitesArray.push({ id: doc.id, ...doc.data() });
        });
        setWebsites(websitesArray);
      } catch (error) {
        console.error('Error getting documents:', error);
      }
    };
  
    fetchWebsites();
  
    const fetchDesigns = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('designs').get();
        const designsArray = [];
        querySnapshot.forEach((doc) => {
          designsArray.push({ id: doc.id, ...doc.data() });
        });
        setDesigns(designsArray);
      } catch (error) {
        console.error('Error getting documents:', error);
      }
    };
  
    fetchDesigns();
  
    const fetchOther = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('other').get();
        const otherArray = [];
        querySnapshot.forEach((doc) => {
          otherArray.push({ id: doc.id, ...doc.data() });
        });
        setOther(otherArray);
      } catch (error) {
        console.error('Error getting documents:', error);
      }
    };
  
    fetchOther();
  }, []);

  return (
    <Page>
      <Title>Websites</Title>
      <div className={style.cards}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {websites.map((website, index) => (
            <SwiperSlide key={index}>
              <a href={`/projects/${website.id}`} className={style.card}>
                <p>{website.title}</p>
              </a>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      <Title>Designs</Title>

      <div className={style.cards}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {designs.map((design, index) => (
            <SwiperSlide key={index}>
              <a href={`/projects/${design.id}`} className={style.card}>
                <p>{design.title}</p>
              </a>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      <Title>Other</Title>
      <div className={style.cards}>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {other.map(( other, index) => (
            <SwiperSlide key={index}>
              <a href={`/projects/${other.id}`} className={style.card}>
                <p>{other.title}</p>
              </a>
            </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>

        </Swiper>
      </div>

    </Page>
  );
};

export default Projects;