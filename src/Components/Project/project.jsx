import React, { useEffect, useState } from 'react';
import style from './project.module.css';
import Page from '../Page/page';
import Section from '../Section/section';
import SmallList from '../list/smalllist';
import Title from '../Title/title';
import { Link, useParams } from 'react-router-dom';
import ROUTES from '../../Routes/routes';
import { FaArrowLeft } from "react-icons/fa";
import LinkButton from '../Button/link';
import { firebase } from '../../firebase';
import Loading from '../Loading/loading';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [colorImages, setColorImages] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        let doc = await firebase.firestore().collection('websites').doc(id).get();
        let collection = 'websites';
        if (!doc.exists) {
          doc = await firebase.firestore().collection('designs').doc(id).get();
          collection = 'designs';
        }
        if (!doc.exists) {
          doc = await firebase.firestore().collection('other').doc(id).get();
          collection = 'other';
        }
        if (doc.exists) {
          const projectData = doc.data();
          setProject(projectData);

          const imagePath = `Projects/${collection}/${doc.id}`;
          const storageRef = firebase.storage().ref(imagePath);
          const imageRefs = await storageRef.listAll();

          const imageUrls = await Promise.all(
            imageRefs.items.map(async (item) => {
              const url = await item.getDownloadURL();
              return { url };
            })
          );

          setImages(imageUrls);

          if (projectData.colors) {
            const colorFolderRef = firebase.storage().ref(`${imagePath}/colors`);
            const colorImageRefs = await colorFolderRef.listAll();

            const colorUrls = await Promise.all(
              colorImageRefs.items.map(async (item) => {
                return item.getDownloadURL();
              })
            );
            setColorImages(colorUrls);
          }
        } else {
          console.log('No such document in any collection!');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Page>
      <Section customClass={style.imgSection}>
        <Link to={ROUTES.projects} className={style.arrow}>
          <FaArrowLeft size={25} color='#1B263B' />
        </Link>
          <Swiper
            style={{
              '--swiper-navigation-color': '#0D1B2A',
              '--swiper-pagination-color': '#0D1B2A',
            }}
            loop={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            mousewheel={true}
            modules={[Autoplay, Mousewheel, Pagination, Navigation]}
            className={style.mySwiper}
          >
            {images.map((image, index) => (
              <SwiperSlide className={style.sliderWidth} key={index}>
                <img className={style.imageStyles} src={image.url} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
      </Section>

      <Section customClass={style.lastSection}>
        <div className={style.description}>
          <Title>{project.title}</Title>
          <p>{project.description}</p>
        </div>

        <div className={style.other}>
          {project.programming ? (
            <div className={style.paddingSkill}>
              <Title>Programmeertalen</Title>
              {project.programming.map((programming, index) => (
                <SmallList key={index} color={'#8699B2'} customClass={style.color}>
                  {programming}
                </SmallList>
              ))}
            </div>
          ) : project.colors ? (
            <div className={style.paddingSkill}>
              <Title>Kleurenpalet</Title>
              {colorImages.map((colorUrl, index) => (
                <img className={style.imgColor} key={index} src={colorUrl} alt={`color-${index}`}/>
              ))}
            </div>
          ) : null}

          {project.website ? (
            <LinkButton link={project.website}>Website</LinkButton>
          ) : project.github ? (
            <LinkButton link={project.github}>Github</LinkButton>
          ) : null}
        </div>
      </Section>
    </Page>
  );
};

export default Project;
