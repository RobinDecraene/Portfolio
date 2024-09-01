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

        for (const doc of querySnapshot.docs) {
          const websiteData = doc.data();
          const imagePath = `Projects/websites/${doc.id}`;
          
          const storageRef = firebase.storage().ref(imagePath);
          const imageRefs = await storageRef.listAll();

          let imageUrl = '';
          if (imageRefs.items.length > 0) {
            imageUrl = await imageRefs.items[0].getDownloadURL();
          }

          websitesArray.push({ id: doc.id, ...websiteData, imageUrl });
        }

        setWebsites(websitesArray);
      } catch (error) {
        console.error('Error fetching websites:', error);
      }
    };

    fetchWebsites();

    const fetchDesigns = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('designs').get();
        const designsArray = [];

        for (const doc of querySnapshot.docs) {
          const designData = doc.data();
          const imagePath = `Projects/designs/${doc.id}`;
          
          const storageRef = firebase.storage().ref(imagePath);
          const imageRefs = await storageRef.listAll();

          let imageUrl = '';
          if (imageRefs.items.length > 0) {
            imageUrl = await imageRefs.items[0].getDownloadURL();
          }

          designsArray.push({ id: doc.id, ...designData, imageUrl });
        }

        setDesigns(designsArray);
      } catch (error) {
        console.error('Error fetching designs:', error);
      }
    };

    fetchDesigns();

  
    const fetchOther = async () => {
      try {
        const querySnapshot = await firebase.firestore().collection('other').get();
        const otherArray = [];
    
        for (const doc of querySnapshot.docs) {
          const otherData = doc.data();
          const imagePath = `Projects/other/${doc.id}`;
          
          const storageRef = firebase.storage().ref(imagePath);
          const imageRefs = await storageRef.listAll();
    
          let imageUrl = '';
          if (imageRefs.items.length > 0) {
            imageUrl = await imageRefs.items[0].getDownloadURL();
          }
    
          otherArray.push({ id: doc.id, ...otherData, imageUrl });
        }
    
        setOther(otherArray);
      } catch (error) {
        console.error('Error fetching other:', error);
      }
    };
    
    fetchOther();
    
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
  
    const date = timestamp.toDate();
  
    return date.toLocaleDateString('nl-BE', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };

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
          className={style.mySwiper}
        >
          {websites.map((website, index) => (
            <SwiperSlide key={index}>
              <a href={`/projects/${website.id}`} className={style.card}>
                <img src={website.imageUrl} alt={website.title}/>
                <p>{website.title}, {formatDate(website.date)}</p>
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
          className={style.mySwiper}
        >
          {designs.map((design, index) => (
            <SwiperSlide key={index}>
              <a href={`/projects/${design.id}`} className={style.card}>
                <img src={design.imageUrl} alt={design.title}/>
                <p>{design.title}, {formatDate(design.date)}</p>
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
          className={style.mySwiper}
        >
          {other.map(( other, index) => (
            <SwiperSlide key={index}>
              <a href={`/projects/${other.id}`} className={style.card}>
                <img src={other.imageUrl} alt={other.title}/>
                <p>{other.title}, {formatDate(other.date)}</p>
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