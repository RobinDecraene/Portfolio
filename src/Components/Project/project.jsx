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
import Slider from '../Slider/imageSlider';
import Loading from '../Loading/loading';

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
            const colorUrls = await Promise.all(
              projectData.colors.map(async (color) => {
                const colorRef = firebase.storage().ref(`${imagePath}/colors/${color}.png`);
                return colorRef.getDownloadURL();
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
    return <Loading/>;
  }

  return (
    <Page>
      <Section customClass={style.imgSection}>
        <Link to={ROUTES.projects} className={style.arrow}>
          <FaArrowLeft size={25} color='#1B263B' />
        </Link>
        {images.length > 1 ? (
          <div className={style.sliderWidth}>
            <Slider slides={images} />
          </div>
        ) : images.length === 1 ? (
          <div className={style.sliderWidth}>
            <div className={style.singleImage}>
              <img 
                src={images[0].url} 
                alt="Single Slide" 
                className={style.imageStyles} 
              />
            </div>
          </div>
        ) : (
          <div className={style.sliderWidth}>
            <img src={''} alt='No Images Available' />
          </div>
        )}
      </Section>

      <Section>
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
                <img className={style.imgColor} key={index} src={colorUrl} alt={`color-${index}`} />
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
